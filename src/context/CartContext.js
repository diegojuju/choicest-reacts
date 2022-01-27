import {useState,createContext, useContext} from 'react'

const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider({children}){

    const [cartList,setCartList] = useState([])    
    const [idOrder,setIdOrder] =useState('')
          
    //pasan como un objeto mi item elegido y su cantidad, luego se busca la posicion dentro del array cartList(que guarda todos mis items) donde se encuentra, si no es encontrado
    //por medio del spread operator se añade el item y su cantidad a mi cartList de items guardados. En caso de encontrarse utilizo el index retornado para ir a la posicion especifica dentro del cartList
    //y sumar la cantidad a mi cantidad guardada. Esto evitar duplicar mismos items en diferentes posiciones dentro del carrito de compras.
    function addToCart({cartItem,quantity}){ 
        let itemFindIndex = []        
        itemFindIndex = cartList.findIndex(itemToAdd=>cartItem.id === itemToAdd.cartItem.id); 
        if (itemFindIndex === -1){
            setCartList(cartList=>[...cartList,{cartItem,quantity}])            
        } else {
            let newCart=[...cartList];          
            newCart[itemFindIndex].quantity += quantity;
            setCartList(newCart)           
        }        
    }
    //funcion para borrar todos los items de mi carrito, se utiliza cuando el usuario quiere vaciar el carrito por eleccion, y cuando se completa una orden satisfactoriamente
    function clearCart(){  
        setCartList([])              
    }         
    
    // ingresa un id de un item, el filter recorre mi cartListo (donde estan mis items del carrito y cantidades), y me guarda todos los items que NO cumplan con ese id, por ende "filtra"
    function removeItem(id){
        let itemFind=[]
        itemFind = cartList.filter((cartItem) => cartItem.cartItem.id !== id)
        setCartList(itemFind)       
    }
    
    //esta funcion tambien podria hacer con un for each, para que recorra el array y quantity y price se sumen al acum 
    function totalPrice(){//precio total de mi carrito
        return cartList.reduce((acum,valor)=>(acum+(valor.quantity*valor.cartItem.price)),0)
    }

    //tambien con un foreach se podria hacer un acumulador para sumar las cantidades de todo el cartList, que es el que guarda mis items del carrito
    function totalQ(){//cantidad de items de mi carrito
        return cartList.reduce((acum,valor)=>acum+valor.quantity,0)
    }
          
    //guardo el numero de orden generado correctamente, se utiliza en EndWindows, si mi numero de id no cambió, significa que el usuario no generó una orden correctamente, porque no completo los datos.
    function setId(id){
        setIdOrder(id)
    }
    
    return (
        <cartContext.Provider value={{
            cartList,   
            idOrder,       
            addToCart,
            clearCart,
            removeItem,
            totalPrice,
            totalQ,
            setId                    
        }}>
            {children}
        </cartContext.Provider>
    )
}