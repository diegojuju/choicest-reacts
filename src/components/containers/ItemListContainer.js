
import {useState, useEffect} from "react"
import axios from "axios";
import ItemList from "../ItemList/ItemList"
import '../../styles/style.css'

//componente utilizado para filtrar items por categorias, en caso de encontrar categoria filtra por todos sus productos

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    
  
    const getProducts = async () => {
      const getDataProducts = await axios.get(
        "https://fakestoreapi.com/products"
      );
      console.log(getDataProducts); // Vemos la respuesta del pedido Axios
      const productsResponse = getDataProducts.data; // Acá guardamos la información que necesitamos accediendo a la key "data"
      console.log(productsResponse); // Vemos la data guardada
      setProducts(productsResponse); // Seteamos el estado "products"
    };
  
    useEffect(() => {
      getProducts();
    }, []);
  
    return (
      <div>
        <h3>{greeting}</h3>
        <ItemList products={products} />
      </div>
    );
  };
  export default ItemListContainer;
  