import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useHistory} from "react-router-dom";

const array20 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function Asientos(props) {
    const [select, setSelect] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory();   

    const handleClick = ev => {
        ev.preventDefault();  

        fetch('http://127.0.0.1:8000/api/reserva/store', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'include',
            body: JSON.stringify(),
        });

       /*   history.push('/'); */  
   
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
            variant={props.reservados && validarAsiento(index+1) ? "danger" : "warning"}>{index + 1 }</Button>)
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
