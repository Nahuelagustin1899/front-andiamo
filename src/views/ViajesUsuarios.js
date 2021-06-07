
import React, { useState, useEffect } from 'react';
import Cargando from "../components/Cargando";
import Viaje from "../components/Viaje";
import viajesService from "./../services/viajes";
import {useHistory} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



function ViajesUsuarios() {
    const [viajes, setViajes] = useState([]);
    const [cargando, setCargando] = useState(true); 

    const history = useHistory();
    

    function handleClick(e,viaje) {    
        e.preventDefault(); 
        console.log(viaje);   
        history.push('/carrito', {viaje : viaje});  }

    useEffect(() => {
        (async () => {
            
            const data = await viajesService.index();
            setViajes(data);
            setCargando(false);
        })().catch(err => console.log("Error al traer los viajes: ", err));
    }, []); 

    return (<div className="fondopantalla">
        <h1 className="mb-5 viajes">Viajes</h1>
                {cargando ?
                <Cargando/> :
                (<ul className="container-fluid">

                  {viajes.map(viaje => ( <Viaje viaje = {viaje} handleClick = {handleClick}/>))}

                </ul>)}      

    </div>);
}

export default ViajesUsuarios;