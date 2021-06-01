import React, { useState, useEffect, useContext } from 'react';
import empresasService from "../services/empresas";
import Cargando from "../components/Cargando";
import { Link } from "react-router-dom";


function Empresas(props) {
  const urlbase = "http://localhost:8000/imgs/empresas/logos/" ;

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
    <li className="mb-4 imagenes" key={item.id}>
        
        <h1 className="mb-4 font">{item.nombre}</h1>
       
        <img className="imagen" width="200" height="200" src={urlbase + item.logo} alt={item.id} />

        <button className="btn btn-danger boton-empresa" onClick={() => {
            empresasService.delete(item.id)
                .then(data => {
                    setEmpresas(empresas.filter(empresa => empresa.id !== item.id));
                    if(typeof props.notExitosaEliminar === 'function') {
                        props.notExitosaEliminar(data);
                    }
                })
                .catch(err => {
                    if(typeof props.notDenegadaEliminar === 'function') {
                        props.notDenegadaEliminar(item);
                    }
                });
        }}>Eliminar</button>
    </li>));

    return (<div className=" pt-3">
        <h1 className="mb-5 text-center viajes">Empresas</h1>

        <Link className="btn btn-primary mb-5 text-center boton" to="/empresas/nueva">Crear nueva empresa</Link>
        
        {cargando ?
            <Cargando/> :
            (<ul className="d-block m-auto">
                {lista}
            </ul>)}
    </div>);
}

export default Empresas;
