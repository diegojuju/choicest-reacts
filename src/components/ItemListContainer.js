import ItemCount from "./ItemCount";
import getData from "../Services/getData";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import axios from "axios";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  console.log("Estos son los productos en ILC", products);

  const getProductsAxios = async () => {
    const getProductsAxios = await axios.get(
      "https://franncode.vercel.app/api/products"
    );

    const responseAxios = getProductsAxios.data;
    setProducts(responseAxios);
  };

  useEffect(() => {
    getProductsAxios();
  }, []);

  return (
    <div>
      <h3>{greeting}</h3>
      { <ItemCount stock={15} initial={1} /> }
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;