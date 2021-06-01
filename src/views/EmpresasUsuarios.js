import React, { useState, useEffect} from 'react';
import empresasService from "../services/empresas";
import Cargando from "../components/Cargando";


function EmpresasUsuarios() {

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

 

    return (<div className="fondopantalla">
                <h1 className="mb-5 text-center viajes">Empresas</h1>    
                {cargando ?
                <Cargando/> :
                (<ul className="container-fluid">

                  {empresas.map(empresa => (
                    <li className="mb-4 imagenes" key={empresa.id}>
                        <h2 className="mb-4 font">{empresa.nombre}</h2>
                        <img className="imagen"  src={urlbase + empresa.logo} alt={empresa.id} /> 
                        <p className="informacion">{empresa.informacion}</p>
                    </li>
                    
                    ))}

                </ul>)}           
            </div>);
}

export default EmpresasUsuarios;
