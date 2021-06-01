import React, {useState} from 'react';
import CargarEmpresa from "./../components/CargarEmpresa";

function NuevasEmpresas(props) {
    return (<div className="container pt-3">
        <h1 className="text-center viajes-empresa mb-4">Crear nueva empresa</h1>

        <CargarEmpresa
            notExitosa={props.notExitosa}
        />
    </div>);
}

export default NuevasEmpresas;
