import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Viaje(props) {


const {viaje, handleClick} = props;  

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return (
        <div>
            <li className="listadoviajes bordes mb-4" key={viaje.id}>
                        <h2 className="nombreviaje white">{viaje.salida.nombre} a {viaje.destino.nombre}
                        </h2>
                        <span className="salida"> <b className="mr-1">Empresa:</b> {viaje.empresa.nombre}</span>
                        <span className="llegada"> <b className="mr-1">Hora salida:</b> {viaje.fecha_salida}</span>
                        <span className="llegada"> <b className="mr-1">Hora llegada:</b> {viaje.fecha_llegada}</span>
                        <span className="precio"><b className="mr-1">Precio: $ </b> {viaje.precio}</span>
                        <span className="precio"><b className="mr-1">Asientos:</b> {viaje.cantidad_asientos}</span>
                        <div>
                            <>
                            <Button className="comprar" variant="primary" onClick={handleShow}>
                                Reservar
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>{viaje.nombre} ${viaje.precio}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><b>Salida:</b> {viaje.fecha_salida} {viaje.fecha_llegada}<br></br><br></br><b>Empresa: </b>{viaje.empresa.nombre}<br></br><br></br>
                                ¿Estás seguro que queres reservar este pasaje?</Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cancelar
                                </Button>
                                <Button variant="primary" onClick={(e)=>handleClick(e,viaje)}>
                                    Reservar
                                </Button>
                                </Modal.Footer>
                            </Modal>
                            </>
                        </div>
                    </li>
        </div>
    )
}
