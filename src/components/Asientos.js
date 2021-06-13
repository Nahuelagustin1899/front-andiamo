import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useHistory} from "react-router-dom";
import {AuthContext} from "../services/auth";

const array20 = ['1V','2P','3P','4V','5V','6P','7P','8V','9V','10P','11P','12V','13V','14P','15P','16V','17V','18P','19P','20V','21V','22P','23P','24V','25V','26P','27P','28V','29V','30P','31P','32V','33V','34P','35P','36V','37V','38P','39P','40V']

function Asientos(props) {
    const [select, setSelect] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory();   
    const authData = useContext(AuthContext);

    const handleClick = ev => {
        ev.preventDefault();  
        if(select){
            fetch('https://andiamo-back.herokuapp.com/api/reserva/store', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'include',    
            body: JSON.stringify({user_id : authData.user.id, viaje_id : props.viaje_id, asiento_reservado : select})
        });

         history.push('/checkout');  
      }      
    }

    function validarAsiento(index){
       const reservasx = props.reservados.filter(el => el.asiento_reservado === index.toString());
       return reservasx.length > 0 
    }

    return (
        
        <>  

        {
            array20.map((item,index)=> <Button onClick={ () => setSelect(index + 1) } 
            className="amarillos"
            disabled={validarAsiento(index+1)}
            variant={props.reservados && validarAsiento(index+1) ? "danger" : "warning"} >{index + 1 }</Button>)
        }

        <Button onClick={handleShow} className="btn btn-primary carrito-boton">Reservar</Button>
        <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>¿Estás seguro que deseas elegir este asiento?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClick} >
          Reservar
          </Button>
        </Modal.Footer>
      </Modal>
    </>            
        </>
    );
}

export default Asientos;
