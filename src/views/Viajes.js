import React, { useState, useEffect } from 'react';
import Cargando from "../components/Cargando";
import viajesService from "./../services/viajes";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useHistory} from "react-router-dom";
import { ImOffice } from "react-icons/im";
import Table from 'react-bootstrap/Table';
import {format} from 'date-fns';



function Viajes(props) {
    
    const history = useHistory();
    const [viajes, setViajes] = useState([]);
    const [cargando, setCargando] = useState(true);  
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const editarViaje = (item) => {
        history.push({pathname:"/editarviaje",state: {item : item}})
    }

    useEffect(() => {
        (async () => {
            const data = await viajesService.indexEmpresa();
            setViajes(data);
            setCargando(false);
        })().catch(err => console.log("Error al traer los viajes: ", err));
    }, []); 

    return (<div className="fondopantalla p-5">
        <h1 className="mb-5 viajes-empresa">Panel de viajes</h1>
    <div >

        <form className="busqueda mb-5">
            <div class="form-group ">
            <label for="destino" className="labelcolor"><i className="mr-2 "><ImOffice style={{ fontSize: 28 }}/></i>Empresa</label>
                <input
                    className="ml-2"
                    type="text"
                    placeholder="Buscar por empresa"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
         </form>

         <Link className="btn btn-primary mb-5 text-center boton" to="/viajes/nueva">Crear nuevo viaje</Link>
            
             {cargando ?
                <Cargando/> :
                (<div className="container-fluid">

                  {viajes.filter((lista) =>
                  lista.empresa.nombre.toLowerCase().includes(search.toLowerCase())).map(item => (<div key={item.id}>
                        <Table  variant="warning" striped bordered hover   >
                        <thead>
                        <tr className="row">
                        <th className="col-4 text-center colorth">Salida</th>
                        <th className="col-4 text-center colorth">Llegada</th>
                        <th className="col-4 text-center colorth">Precio</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="row"> 
                        <td className="col-4 text-center colortd">{item.salida.nombre}</td>
                        <td className="col-4 text-center colortd">{item.destino.nombre}</td>
                        <td className="col-4 text-center colortd">$ {item.precio}</td>
                        </tr>
                        </tbody>
                        </Table>

                        <Table  variant="warning" striped bordered hover >
                        <thead>
                        <tr className="row">
                        <th className="col-4 text-center colorth">Empresa</th>
                        <th className="col-4 text-center colorth">Fecha salida</th>
                        <th className="col-4 text-center colorth">Fecha llegada</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="row">
                        <td className="col-4 text-center colortd">{item.empresa.nombre}</td>
                        <td className="col-4 text-center colortd">{format(new Date
                        (item.fecha_salida), 'dd-MM-yyyy hh:mm:ss a')}</td>
                        <td className="col-4 text-center colortd ">{format(new Date
                        (item.fecha_llegada), 'dd-MM-yyyy hh:mm:ss a')}</td>
                        
                        </tr>
                        </tbody>
                        </Table>
             <div>           
                <Button variant="primary" onClick={handleShow} className="btn btn-danger boton-eliminar-perfil" >
                    Eliminar
                </Button>
                <a className="btn btn-success boton-editar-perfil" onClick={() => editarViaje(item)}>Editar Viaje</a>
            </div>              
            <hr className="hr" />


                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton><b className="text-center">De 
                    {" " + item.salida.nombre} a {item.destino.nombre}</b>
                    </Modal.Header>
                    <Modal.Body>¿Estás seguro que deseas eliminar este viaje?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <button className="btn btn-secondary">
                            Cerrar
                        </button>
                    </Button>
                    <Button onClick={handleClose}>
                    <button className="btn btn-primary" 
                        onClick={() => {
                            viajesService.delete(item.id)
                                .then(data => {
                                    setViajes(viajes.filter(viaje => viaje.id !== item.id));
                                    if(typeof props.notExitosaEliminar === 'function') {
                                        props.notExitosaEliminar(data);
                                        
                                    }
                                    history.push('/viajes'); 
                                })
                                
                                .catch(err => {
                                    if(typeof props.notDenegadaEliminar === 'function') {
                                        props.notDenegadaEliminar(item);
                                    }
                                });
                        }}>Eliminar</button>
                    </Button>
                    </Modal.Footer>
                </Modal>
                    </div>
                    ))}

                </div>)}      
      
      
    </div> </div>);
}

export default Viajes;