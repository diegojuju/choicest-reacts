import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import {getFirestore} from "../../services/getFirebase"
import Spinner from "react-bootstrap/Spinner"
import Button from "react-bootstrap/Button"
import ItemList from "../ItemList/ItemList"
import '../../styles/style.css'

//componente utilizado para filtrar items por categorias, en caso de encontrar categoria filtra por todos sus productos
function ItemListContainer({greeting}) {
        
    const [products,setProducts] =useState([])
    const [loading,setLoading]=useState(true) 
    const {idCategory}  = useParams()    
   
    useEffect(() => {    
        
        const dbQuery = getFirestore()
        const queryItems = idCategory? 
                                        dbQuery.collection('items').where('category','==',idCategory) 
                                    :   
                                        dbQuery.collection('items')
        queryItems.get()        
        .then(resp=>{
            setProducts(resp.docs.map(items=>({id:items.id,...items.data()}))) 
        })
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
        
    },[idCategory]) 

    return (
        <>
            <h1 className='text-danger m-3 title'>{greeting}</h1> 
            {loading ?  
                    <Button variant="info" disabled>
                        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>Por favor espere...
                    </Button>:             
                    <ItemList items={products}/>           
            }     
        </>
    )
}

export default ItemListContainer
