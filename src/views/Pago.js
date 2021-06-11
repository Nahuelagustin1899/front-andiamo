import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import qr from '../img/qr.png';

function Pago() {
    const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

    const history = useHistory();
    const handleSubmit = ev => {
        ev.preventDefault();           
       history.push('/'); 
   };

 
    return (<div class="container">
    <div class="py-5 text-center">
        
        <h2 className="check">Checkout</h2>
    </div>
    <div class="row divss">
        <div class="col-md-8 order-md-1">
            <form   
            action="#"
            method="post"
             onSubmit={handleSubmit} >
                <div class="row global">
                    <div class="col-md-6 mb-3">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" class="form-control" id="nombre" placeholder="" required />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" class="form-control" id="apellido" placeholder="" required />
                    </div>
                </div>
                <div class="mb-3 global">
                    <label htmlFor="email">Email <span class="text-muted"></span></label>
                    <input type="email" class="form-control" id="email" placeholder="email@ejemplo.com" required/>
                </div>
                <div class="mb-3 global">
                    <label htmlFor="direccion">Dirección</label>
                    <input type="text" class="form-control" id="direccion" placeholder="" required/>
                </div>
                <div class="row global">
                    <div class="col-md-5 mb-3">
                        <label htmlFor="provincia">Provincia</label>
                        <select class="custom-select d-block w-100" id="provincia" >
                            <option value="">Elegi tu provincia</option>
                            <option>Chaco</option>
                            <option>Buenos Aires</option>
                            <option>Formosa</option>
                            <option>Mendoza</option>
                            <option>San Luis</option>
                            <option>Salta</option>
                            <option>Entre Ríos</option>
                        </select>
                    </div>
                </div>
                <hr class="mb-4"/>
                <h4 class="mb-3 text-center"><b>Pago</b></h4>
    
                <div class="row">
                    <div class="col-md-6 mb-3 global">
                        <label htmlFor="nombre-tarj">Nombre de la tarjeta</label>
                        <input type="text" class="form-control" id="nombre-tarj" placeholder="" required/>
                    </div>
                    <div class="col-md-6 mb-3 global">
                        <label htmlFor="num-tarj">Número de la tarjeta</label>
                        <input type="text" class="form-control" id="num-tarj" placeholder=""  required maxlength="3"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mb-3 global">
                        <label htmlFor="expiracion">Fecha de expiración</label>
                        <input type="month" class="form-control" id="expiracion" placeholder="" required/>
                    </div>
                    <div class="col-md-3 mb-3 global">
                        <label htmlFor="seguridad">Código de seguridad</label>
                        <input type="text" class="form-control" id="seguridad" placeholder="" required maxlength="3"/>
                    </div>
                </div>
                <hr class="mb-4"/>
                <button  onClick={handleShow}   class="btn btn-primary btn-lg btn-block mb-5" type="submit">Continuar</button>
            <>
                
                <Modal className="modal"  show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <b className="exito"> Reservaste tu pasaje con exito. Felicidades</b>
                    </Modal.Header>
                    <Modal.Body>
                       <b> Con este código QR, vas a poder comprar tu viaje en la sucuarsal.</b>
                    <img
                        className="d-block w-100 qr"
                        src={qr}
                        alt="qr"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleSubmit}>
                        Cerrar
                    </Button>
                    </Modal.Footer>
                </Modal>
                
                </>   
         
            </form>
        </div>
    </div>
</div>);
}

export default Pago;