import {useEffect, useState} from 'react'
import {useParams} from "react-router";
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import {getFirestore} from "../../services/getFirebase";
import Spinner from "react-bootstrap/Spinner"
import Button from "react-bootstrap/Button"
import ItemDetail from "../ItemDetail/ItemDetail";

//Componente contenedor de items, los lista por pantalla, en caso que no exista un item se muestra leyenda que no se encontró el producto(se comprueba que el titulo exista para hacer esta comprobacion)
function ItemDetailContainer() {
    
    const [item, setItem] = useState('');     
    const {idItem} = useParams(); 
    const [loading,setLoading]=useState(true)         
        
    useEffect(() => {           

        const dbQuery = getFirestore()        
        dbQuery.collection('items').doc(idItem).get()
        .then(resp=>setItem({id:resp.id,...resp.data()}))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))  

    },[idItem])   

    return (
        <>            
            {loading ?  
                <Button variant="primary" disabled className="m-2 p-2">
                    <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>Cargando detalles
                </Button>
                : 
                <>
                    {item.title ? 
                            <ItemDetail key={item.id} item={item}/>                   
                        :
                        <>
                            <h1 className='text-info'>Producto no encontrado</h1>
                            <h2 className='text-info'>Por favor volvé a elegir un producto de nuestro catalogo</h2>
                            <Nav.Link as={Link} to="/" style={{fontSize:'1.5rem'}}>
                                Volvé al sitio pulsando aquí                    
                            </Nav.Link>
                        </>
                    }  
                </>                    
            }           
        </>
    )
}

export default ItemDetailContainer
