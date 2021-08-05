import React from 'react';
import CargarViaje from "./../components/CargarViaje";
import KeyboardReturnSharpIcon from '@material-ui/icons/KeyboardReturnSharp';

function NuevosViajes(props) {
    return (
    <div className="fondopantalla p-3">
       <h1 className="mb-4 viajes-empresa">Crear nuevo viaje</h1>
       <a className="btn btn-primary mb-4" href="/viajes"><KeyboardReturnSharpIcon/></a>
        <div className="container divs">
        <CargarViaje notExitosa={props.notExitosa}
        />
        </div>
    </div>);
}

export default NuevosViajes;