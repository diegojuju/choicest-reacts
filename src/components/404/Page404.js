import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

function Page404() {
    return (
        <div>
            <h1 className='text-danger'>Page Not Found!</h1>            
            <Nav.Link as={Link} to="/" style={{fontSize:'1.5rem'}}>
                Volvé al sitio pulsando aquí                    
            </Nav.Link>
        </div>
    )
}

export default Page404
