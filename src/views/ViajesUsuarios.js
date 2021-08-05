
import React, { useState, useEffect } from 'react';
import Cargando from "../components/Cargando";
import Viaje from "../components/Viaje";
import viajesService from "./../services/viajes";
import { useHistory } from "react-router-dom";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { SiGooglecalendar } from "react-icons/si";
import { CgDanger } from "react-icons/cg";
import TextField from '@material-ui/core/TextField';
import ReactPlayer from 'react-player';

function ViajesUsuarios() {
    const [viajesAux, setViajesAux] = useState([]);
    const [viajes, setViajes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const history = useHistory();
    const [empresa, setEmpresa] = useState("");
    const [precio, setPrecio] = useState("");
    const [salida, setSalida] = useState("");

    function handleClick(e, viaje) {
        e.preventDefault();
        console.log(viaje);
        history.push('/carrito', { viaje: viaje });
    }

    useEffect(() => {
        (async () => {

            const data = await viajesService.index();
            setViajes(data);
            setViajesAux(data);
            setCargando(false);
        })().catch(err => console.log("Error al traer los viajes: ", err));
    }, []);


    const filtro = () => {
        
        const newData = viajes.filter((item) => {
            const itemEmpresa = item.empresa.nombre ? item.empresa.nombre.toUpperCase() : ''.toUpperCase();
            const itemPrecio = item.precio;
            const itemSalida = item.fecha_salida;
            const textData = empresa.toUpperCase();
            return itemEmpresa.indexOf(textData) > -1 && itemPrecio.indexOf(precio) > -1 && itemSalida.indexOf(salida) > -1;
        });

        console.log(newData);
        setViajes(newData);
    }

    const clear = () => {
        setEmpresa('');
        setPrecio('');
        setSalida('');
        setViajes(viajesAux);
    }



    return (
        <div className="fondopantalla p-1">

            <h1 className="mb-5 viajes">Viajes</h1>
            <p className="alert alert-danger font-weight-bold viajes-us-p"><CgDanger className="mr-5" style={{ fontSize: 25 }} />Para reservar un pasajes tendrás que pagar un 25% del mismo</p>

            <div className="video">

                <h2 className='text-center h3 font-weight-bold m-3'>¿Cómo Reservar Online?</h2>

                <hr />

                <p className="text-center">Te dejamos un <b>VIDEO con instrucciones</b> para aprender cómo reservar tu pasaje on-line.</p>

                <ReactPlayer
                    url='https://youtu.be/NznFi-Y7ZuE'
                    className='react-player '
                    playing
                    width='100%'
                    height='100%' />
            </div>

            <div className="filtros">
                <div className="form-group ">
                    <label className="d-block ml-2" htmlFor="empresa">Empresa <BsFillBriefcaseFill className="ml-2" style={{ fontSize: 25 }} /></label>
                    <input
                        className="form-control inputs-filtros"
                        type="text"
                        value={empresa}
                        placeholder="Buscar por empresa"
                        onChange={(e) => setEmpresa(e.target.value)}
                    />
                    <button className="btn btn-success d-inline-block w-25" onClick={filtro}>Buscar</button>
                </div>

                <div className="form-group ">
                    <label className="d-block " htmlFor="date">Fecha salida <SiGooglecalendar className="ml-2" style={{ fontSize: 23 }} /></label>
                    <TextField
                        className="form-control inputs-filtros"
                        type="date"
                        value={salida}
                        onChange={(e) => setSalida(e.target.value)}
                    />
                    <button className="btn btn-success d-inline-block w-25 btn-fecha" onClick={filtro}>Buscar</button>
                </div>

                <div className="form-group ">
                    <label className="d-block" htmlFor="empresa">Precio <FaMoneyBillAlt className="ml-2" style={{ fontSize: 25 }} /></label>
                    <input
                        className="form-control inputs-filtros"
                        type="text"
                        value={precio}
                        placeholder="Buscar por precio"
                        onChange={(e) => setPrecio(e.target.value)}
                    />
                    <button className="btn btn-success d-inline-block w-25" onClick={filtro}>Buscar</button>
                </div>


                <button className="btn btn-primary limpiar-filtro" onClick={clear}>Limpiar</button>
            </div>

            {cargando ?
                <Cargando /> :
                (<ul className="container-fluid">
                    {viajes.map(viaje => (<Viaje viaje={viaje} handleClick={handleClick} />))}
                </ul>)}

        </div>);
}

export default ViajesUsuarios;