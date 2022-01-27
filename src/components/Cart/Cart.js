import {useState} from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import {useCartContext} from "../../context/CartContext"
import {getFirestore} from '../../services/getFirebase'
import FormCart from './FormCart';
import EmptyCart from './EmptyCart';
import ItemCardView from './ItemCardView'
import TotalPriceView from './TotalPriceView'

// componente donde se realiza la llamada a firebase, contenedor de formulario, los items del carrito, del carrito vacio y el mensaje con el detalle de numero de orden 
function Cart() {
    
    const {cartList,clearCart,removeItem,totalPrice,setId,addToCart}= useCartContext()        
    const [formData,setFormData]=useState({
        name:'', 
        surname:'',       
        phone:'',
        email:'',
        email2:'',
    })   
    let itemsCartOk = true //se usa en el array de comprobaciones de stock

    const generateOrder=()=>{
        let order ={}
        order.date =firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer =formData      
        order.total= totalPrice();
        order.items =cartList.map(cartItem=>{
            const id= cartItem.cartItem.title
            const title=cartItem.cartItem.title
            const price=cartItem.cartItem.price*cartItem.quantity
            return {id,title,price}
        })        
    }

    function handleOnChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value               
        })        
    }

    function handleOnSubmit(e){
        e.preventDefault()
        let order={}
        order.date=firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer=formData
        order.total=totalPrice()
        order.items=cartList.map(cartItem =>{
            const id=cartItem.cartItem.id;
            const title=cartItem.cartItem.title;
            const price=cartItem.quantity*cartItem.cartItem.price
            return {id,title,price}
        })

        const db = getFirestore()
        db.collection('orders').add(order)        
        .then(resp=>{
            setId(resp.id)                      
        })
        .catch(err=>console.log(err))
        .finally(()=>{
            setFormData({});          
        })
        
        //batch para atualizar el estado de todos los items 
        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(),'in', cartList.map(i=>i.cartItem.id)
        )
        const batch=db.batch();
        itemsToUpdate.get()
        .then(collection=>{
            collection.docs.forEach(docSnapchot =>{
                batch.update(docSnapchot.ref,{
                    stock:docSnapchot.data().stock - cartList.find(item=> item.cartItem.id === docSnapchot.id).quantity
                })
            })
        batch.commit().then()
        .catch(err=>console.log(err))            
        })
    }
//-------- comprobacion del stock de los items del carrito-----------
    function cartOk(){        
        let arrayCart=[]
        cartList.forEach(item=>{  // pregunta por cada item si el stock es suficiente para cubrir la cantidad elegida por el usuario           
            item.cartItem.stock>=item.quantity?
                                                arrayCart.push(true) //si hay stock agrega un true al array de comprobaciones
                                                :
                                                arrayCart.push(false)//si NO hay stock agrega un false al array  
            arrayCart.includes(false)?
                                        itemsCartOk=false//No hay stock de algun articulo del carrito 
                                        :
                                        itemsCartOk=true //Hay stock suficiente de los articulos del carrito, permite continuar la compra            
        })}    
    cartOk()      
//-------------------------------------------------------------------------------------------------------------------------------------
    return (
        <>   
            <h1 className="mt-3" >Tu carrito de compras</h1>     
            {cartList.length>0? //se consulta si hay items en el carrito, en caso de ser negativo se muestra el componente de carrito vacio             
                <Container fluid>
                    <Row>                                          
                        <Col xs={12} md={8}>                        
                            <Container fluid className='m-1 p-1'>
                                {cartList.map(item=>// se visualizan los items dentro del carrito de compras,se pueden modificar las cantidades o quitar un item del carrito
                                    <ItemCardView key={item.cartItem.id} item={item} removeItem={removeItem} addToCart={addToCart}/>                                   
                                )} 
                             </Container>                                                                     
                        </Col>
                        <Col xs={6} md={4}>                   
                            <Card className='m-3 p-2' style={{ display:'flex' ,flexDirection:'row',justifyContent:'end'}}>                       
                                {itemsCartOk?//si hay stock de los items del carrito se puede continuar la compra
                                    <>
                                        <FormCart formData={formData} handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} generateOrder={generateOrder} clearCart={clearCart}/>                                    
                                    </>
                                    :
                                    <>                                      
                                        <Container>Un item supera la cantidad que tenemos disponible, por favor modifica la cantidad</Container>
                                        <Button className='m-1' variant="success" disabled>Continuar Compra</Button>
                                    </>
                                }
                            </Card>   
                            <TotalPriceView totalPrice={totalPrice}/>                           
                        </Col>                 
                    </Row>       
                </Container>
                :  
                <EmptyCart/>
            }          
        </>
    )
}
export default Cart