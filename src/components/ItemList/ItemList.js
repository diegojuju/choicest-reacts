import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return (
     
          // Items de FakeStoreApi
          <Item
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        );
      })}
    </div>
  );
};
export default ItemList;

