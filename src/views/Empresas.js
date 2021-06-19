import React, { useState, useEffect } from 'react';
import empresasService from "../services/empresas";
import Cargando from "../components/Cargando";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

function Empresas(props) {
    const urlbase = "https://andiamo-back.herokuapp.com/imgs/empresas/logos/" ;
    const [empresas, setEmpresas] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        (async () => {
            const data = await empresasService.index();
            setEmpresas(data);
            setCargando(false);
        })().catch(err => console.error('Error al traer las empresas: ', err));
    }, []);

    const lista = empresas.map(item => (
        <div key={item.id}>
            <Table variant="warning" striped bordered hover>
                <thead>
                    <tr className="row">
                        <th className="col-4 text-center colorth">Nombre</th>
                        <th className="col-4 text-center colorth">Logo</th>
                        <th className="col-4 text-center colorth">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="row">
                        <td className="col-4 text-center colortd font-weight-bold">{item.nombre}</td>
                        <td className="col-4 text-center colortd font-weight-bold"><img className="img-empresa" src={urlbase + item.logo} alt={item.id} /></td>
                        <td className="col-4 text-center colortd">
                            <button className="btn btn-danger boton-empresa" onClick={() => {
                                empresasService.delete(item.id)
                                    .then(data => {
                                        setEmpresas(empresas.filter(empresa => empresa.id !== item.id));
                                        if (typeof props.notExitosaEliminar === 'function') {
                                            props.notExitosaEliminar(data);
                                        }
                                    })
                                    .catch(err => {
                                        if (typeof props.notDenegadaEliminar === 'function') {
                                            props.notDenegadaEliminar(item);
                                        }
                                    });
                            }}>Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </Table>

        </div>
    ));

    return (<div className="fondopantalla p-5">
        <h1 className="mb-5 text-center viajes">Empresas</h1>

        <Link className="btn btn-primary mb-5 text-center boton" to="/empresas/nueva">Crear nueva empresa</Link>

        {cargando ?
            <Cargando /> :
            (<ul className="d-block m-auto">
                {lista}
            </ul>)}
    </div>);
}

export default Empresas;
