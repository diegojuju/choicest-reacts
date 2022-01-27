import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import EndWindow from './EndWindow'

//este componente recibe las funciones para cambiar y guardar los datos del formulario, ademas permite relizar la compra o borrar los items del carrito, es 
function FormCart({formData,handleOnSubmit,handleOnChange,generateOrder,clearCart}) {

    return (
        <Container>
            <h5>Por favor completa tus datos para continuar la compra</h5>
            <form onSubmit={handleOnSubmit} onChange={handleOnChange}>
                <p>Nombre:</p>
                <input
                    type='text'
                    placeholder='Ingrese su nombre'
                    name='name'
                    defaultValue={formData.name}  
                    required
                    style={{width:"90%"}}
                /> 
                <p>Apellido:</p>
                <input
                    type='text'
                    placeholder='Ingrese su apellido'
                    name='surname'
                    defaultValue={formData.surname}  
                    required
                    style={{width:"90%"}}
                />                                                
                <p>Telefono:</p>
                <input
                    type='number'
                    placeholder='Ingrese su telefono'
                    name='phone'   
                    defaultValue={formData.phone}                                     
                    required    
                    style={{width:"90%"}}
                />
                <p>Email:</p>
                <input
                    type='email'
                    placeholder='Ingrese su email'
                    name='email'
                    defaultValue={formData.email}
                    required      
                    style={{width:"90%"}}                                              
                />
                <p>Confirma tu email</p>
                <input
                    type='email'
                    placeholder='Confirme su email'
                    name='email2'
                    defaultValue={formData.email2}  
                    required     
                    style={{width:"90%"}}                                      
                />                      
                <div>
                    <h5 className="mt-2">Medios de Pago:</h5>
                    <label className="radio-inline m-1">
                        <input type="radio" name="movimiento" value="Venta" disabled/>Tarjeta de credito 
                    </label>
                    <label className="radio-inline m-1">
                        <input type="radio" name="movimiento" value="Renta" disabled/>Mercado Pago 
                    </label>
                    <label className="radio-inline m-1">
                        <input type="radio" name="movimiento" value="Traspaso" defaultChecked/>Efectivo 
                    </label>   
                </div>
                <Button onClick={clearCart} className='btn-danger mt-3' style={{width:"90%"}}>Vacíar carrito</Button>   
                {formData.email===formData.email2? 
                    <EndWindow generateOrder={generateOrder} type="submit"/>                    
                :
                    <Button  className='btn-danger mt-3' style={{width:"90%"}} disabled>Los emails deben ser iguales</Button>
                }                                   
            </form>                             
        </Container>        
    )
}

export default FormCart
