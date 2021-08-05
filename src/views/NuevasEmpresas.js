import React from 'react';
import CargarEmpresa from "./../components/CargarEmpresa";
import KeyboardReturnSharpIcon from '@material-ui/icons/KeyboardReturnSharp';

function NuevasEmpresas(props) {
    return (
        <div className="fondopantalla p-3">
            <a className="btn btn-primary mb-4" href="/empresaspanel"><KeyboardReturnSharpIcon/></a>
            <h1 className="mb-4 viajes-empresa">Crear nueva empresa</h1>
            <div className="container divs">
                <CargarEmpresa
                    notExitosa={props.notExitosa}
                />
            </div>
        </div>);
}

export default NuevasEmpresas;
