import React from 'react';
import CargarEmpresa from "./../components/CargarEmpresa";

function NuevasEmpresas(props) {
    return (
        <div className="fondopantalla p-3">
            <h1 className="mb-4 viajes-empresa">Crear nueva empresa</h1>
            <div className="container divs">
                <CargarEmpresa
                    notExitosa={props.notExitosa}
                />
            </div>
        </div>);
}

export default NuevasEmpresas;
