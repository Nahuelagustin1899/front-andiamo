import React, {useState} from 'react';
import CargarViaje from "./../components/CargarViaje";


function NuevosViajes(props) {
    return (<div className=" pt-3">
       <h1 className="mb-4 viajes-empresa">Crear nuevo viaje</h1>
        <div className="container divs">


        <CargarViaje notExitosa={props.notExitosa}
        />
        </div>
    </div>);
}

export default NuevosViajes;