import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"



// componente que muestra seccion de contacto
function Contact() {
    return (
        <>
            <Container fluid style={{display:'flex' ,justifyContent:'center', textAlign:'center'}}>
                <Card border="info" className="m-5 shadow p-3 bg-white rounded" style={{maxWidth:'30rem'}} >
                    <Card.Header className="fw-bold">Contacto</Card.Header>
                    <Card.Body>     
                        <Card.Text> Por favor comunícate con nosotros en caso de consulta</Card.Text>
                        <Card.Text> Email: choicest@gmail.com</Card.Text>
                        <Card.Text> Teléfono: +5493516809094</Card.Text>                        
                    </Card.Body>
                </Card>                
            </Container> 
        </>
    )
}

export default Contact