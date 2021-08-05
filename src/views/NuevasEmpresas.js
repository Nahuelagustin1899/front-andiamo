import React from 'react';
import CargarEmpresa from "./../components/CargarEmpresa";
import KeyboardReturnSharpIcon from '@material-ui/icons/KeyboardReturnSharp';

function NuevasEmpresas(props) {
    return (
        <div className="fondopantalla p-3">
            <h1 className="mb-4 viajes-empresa btn-volver">Crear nueva empresa</h1>
            <a className="btn btn-primary mb-4" href="/empresaspanel"><KeyboardReturnSharpIcon/></a>
            <div className="container divs">
                <CargarEmpresa
                    notExitosa={props.notExitosa}
                />
            </div>
        </div>);
}

export default NuevasEmpresas;
