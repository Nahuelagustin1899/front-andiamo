
import React, { useState, useEffect } from 'react';
import Cargando from "../components/Cargando";
import viajesService from "./../services/viajes";


function ViajesUsuarios() {
    const [viajes, setViajes] = useState([]);
    const [cargando, setCargando] = useState(true); 


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

                  {viajes.map(viaje => (
                    <li className="listadoviajes bordes mb-4" key={viaje.id}>
                        <h2 className="nombreviaje white">{viaje.salida.nombre} a {viaje.destino.nombre}
                        </h2>
                        <span className="salida"> <b className="mr-1">Empresa:</b> {viaje.empresa.nombre}</span>
                        <span className="llegada"> <b className="mr-1">Hora salida:</b> {viaje.fecha_salida}</span>
                        <span className="llegada"> <b className="mr-1">Hora llegada:</b> {viaje.fecha_llegada}</span>
                        <span className="precio"><b className="mr-1">Precio: $ </b> {viaje.precio}</span>
                        <span className="precio"><b className="mr-1">Asientos:</b> {viaje.cantidad_asientos}</span>
                    </li>
                    
                    ))}

                </ul>)}      

    </div>);
}

export default ViajesUsuarios;