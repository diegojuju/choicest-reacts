import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Item from "./Item"

//componente que recibe por prop un array de items, estos items luego se visualizan uno por uno a través del componente ITEM.
function ItemList({items}) {
    
    return (
        <>
            <Container className="container d-flex justify-content-center align-item-center h-100 ">
                <Row className="justify-content-center">
                    {items.map(item=><Item key={item.id}  item={item} />)}
                </Row>
            </Container>
        </>
    )
}

export default ItemList
