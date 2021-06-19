import React, { useState, useEffect} from 'react';
import empresasService from "../services/empresas";
import Cargando from "../components/Cargando";


function EmpresasUsuarios() {

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

    return (
        <div className="fondopantalla p-5">
            <h1 className="mb-5 text-center viajes">Empresas</h1>
            {cargando ?
                <Cargando /> :
                (<ul className="container-fluid">
                    {empresas.map(empresa => (
                        <li className="li-empresas" key={empresa.id}>
                            <img className="imagen-empresa" src={urlbase + empresa.logo} alt={empresa.id} />
                            <p className="informacion-empresa">{empresa.informacion}</p>
                        </li>
                    ))}
                </ul>)}
        </div>);
}

export default EmpresasUsuarios;