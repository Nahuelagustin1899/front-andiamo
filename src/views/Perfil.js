import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from "../services/auth";
import reservasService from "./../services/reservas";
import Table from 'react-bootstrap/Table';
import { format } from 'date-fns';
import { Link } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit.js';
import { FaBusAlt } from "react-icons/fa";
import Cargando from "../components/Cargando";
import { BsFillBriefcaseFill } from "react-icons/bs";

function Perfil() {

    const [reservas, setReservas] = useState([]);
    const urlbase = "https://andiamo-back.herokuapp.com/imgs/perfiles/logos/";
    const [empresasReservas, setEmpresasReservas] = useState([]);
    const [adminReservas, setAdminReservas] = useState([]);
    const [viajeId, setViajeId] = useState("");
    const [viajesAux, setViajesAux] = useState([]);
    const [todasReservas, setTodasReservas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [empresa, setEmpresa] = useState("");

    useEffect(() => {
        (async () => {
            const data = await reservasService.index();
            setReservas(data);
            setCargando(false);
        })().catch(err => console.log("Error al traer las reservas: ", err));
    }, []);

    useEffect(() => {
        (async () => {
            const data = await reservasService.indexAdmin();
            setAdminReservas(data);
            setCargando(false);
            setViajesAux(data);
        })().catch(err => console.log("Error al traer las reservas: ", err));
    }, []);

    const filtroAdmin = () => {

        const newData = adminReservas.filter((item) => {
            const itemEmpresa = item.nombre ? item.nombre.toUpperCase() : ''.toUpperCase();
            const textData = empresa.toUpperCase();
            return itemEmpresa.indexOf(textData) > -1;
        });

        console.log(newData);
        setAdminReservas(newData);
    }

    const clearAdmin = () => {
        setEmpresa('');
        setAdminReservas(viajesAux);
    }


    useEffect(() => {
        (async () => {
            const data = await reservasService.indexEmpresa();
            setEmpresasReservas(data);
            setCargando(false);
            setViajesAux(data);
            setTodasReservas(data[0].reservas)
        })().catch(err => console.log("Error al traer las reservas: ", err));

    }, []);

    const filtro = () => {

        const newData = empresasReservas && empresasReservas.map((empresa) => {
            console.log(empresasReservas);
            const reservasBuscar = Array.from(empresa.reservas);

            const resultados = reservasBuscar.filter((e) => e.viaje_id === parseInt(viajeId));
            var nuevaEmpresa = empresa;
            nuevaEmpresa.reservas = resultados;

            return nuevaEmpresa

        });

        setEmpresasReservas(newData);
    }


    const clear = () => {
        setViajeId('');
        var misViajes = viajesAux;
        misViajes[0].reservas = todasReservas;
        setEmpresasReservas(misViajes);
    }

    const listaEmpresa = empresasReservas && empresasReservas.map(empresa => (<div key={empresa.id}>
        <Table variant="warning" striped bordered hover   >
            <thead>
                <tr className="row">
                    <th className="col-4 text-center colorth radius-top-izq">ID viaje</th>
                    <th className="col-4 text-center colorth">Asiento reservado</th>
                    <th className="col-4 text-center colorth radius-top-der">Estado</th>
                </tr>
            </thead>

            <tbody>

                {empresa.reservas.map(espacio =>
                    <tr className="row">
                        <td className="col-4 text-center colortd radius-bottom-izq">
                            {espacio.viaje_id}
                        </td>
                        <td className="col-4 text-center colortd">
                            {espacio.asiento_reservado}
                        </td>
                        <td className="col-4 text-center colortd radius-bottom-der">
                            Reservado
                        </td>
                    </tr>
                )}

            </tbody>

        </Table>


        <hr className="perfileshr" />

    </div >));

    const listaAdmin = adminReservas && adminReservas.map(empresa => (<div key={empresa.id}>
        <Table variant="warning" striped bordered hover   >
            <thead>
                <tr className="row">
                    <th className="col-4 text-center colorth radius-top-izq">Empresa</th>
                    <th className="col-4 text-center colorth">ID viaje</th>
                    <th className="col-4 text-center colorth radius-top-der">Asiento reservado</th>
                </tr>
            </thead>

            <tbody>
                {empresa.reservas.map(espacio =>
                    <tr className="row">
                        <td className="col-4 text-center colortd radius-bottom-izq">
                            {empresa.nombre}
                        </td>
                        <td className="col-4 text-center colortd">
                            {espacio.viaje_id}
                        </td>
                        <td className="col-4 text-center colortd radius-bottom-der">
                            {espacio.asiento_reservado}
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>


        <hr className="perfileshr" />

    </div >));

    const lista = reservas && reservas.map(reserva => (<div key={reserva.id}>


        <Table variant="warning" striped bordered hover   >
            <thead>
                <tr className="row">
                    <th className="col-4 text-center colorth radius-top-izq">Asiento reservado</th>
                    <th className="col-4 text-center colorth">Fecha salida</th>
                    <th className="col-4 text-center colorth radius-top-der">Fecha llegada</th>
                </tr>
            </thead>
            <tbody>
                <tr className="row">
                    <td className="col-4 text-center colortd radius-bottom-izq">{reserva.asiento_reservado}</td>
                    <td className="col-4 text-center colortd">{format(new Date(reserva.viaje.fecha_salida), 'dd-MM-yyyy hh:mm:ss a')}</td>
                    <td className="col-4 text-center colortd radius-bottom-izq">{format(new Date(reserva.viaje.fecha_llegada), 'dd-MM-yyyy hh:mm:ss a')}</td>
                </tr>
            </tbody>
        </Table>

        <Table variant="warning" striped bordered hover   >
            <thead>
                <tr className="row">
                    <th className="col-4 text-center colorth radius-bottom-izq">Precio</th>
                    <th className="col-4 text-center colorth">Salida</th>
                    <th className="col-4 text-center colorth radius-bottom-der">Destino</th>
                </tr>
            </thead>
            <tbody>
                <tr className="row">
                    <td className="col-4 text-center colortd radius-bottom-izq">{reserva.viaje.precio}</td>
                    <td className="col-4 text-center colortd">{reserva.viaje.salida.nombre}</td>
                    <td className="col-4 text-center colortd radius-bottom-der">{reserva.viaje.destino.nombre}</td>
                </tr>
            </tbody>
        </Table>
        <hr className="perfileshr" />

    </div>));


    const authData = useContext(AuthContext);
    console.log(authData);

    return (<div className='fondopantalla p-5'>

        <h1 className="viajes">Perfil</h1>
        <Link to="/editarusuario">
            <Fab color="primary" aria-label="edit">
                <EditIcon />
            </Fab>
        </Link>

        <div className="caja-perfil">
            <img className="imagen" src={urlbase + authData.user.logo} alt={authData.user.name} />
            <p className="text-center badge badge-warning nombre-perfil"><b>Nombre: </b>  {authData.user.name}</p>
        </div>

        {
            cargando ?
                <Cargando /> :
                authData.user.id === 1 ?
                    (<>
                        <div className="filtross">
                            <div className="form-group ">
                                <label className="d-block ml-2" htmlFor="empresa">Empresa <BsFillBriefcaseFill className="ml-2" style={{ fontSize: 25 }} /></label>
                                <input
                                    className="form-control inputs-filtross"
                                    type="text"
                                    value={empresa}
                                    placeholder="Buscar por empresa"
                                    onChange={(e) => setEmpresa(e.target.value)}
                                />
                                <button className="btn btn-success d-inline-block" onClick={filtroAdmin}>Buscar</button>
                            </div>
                            <button className="btn btn-primary limpiar-filtro" onClick={clearAdmin}>Limpiar</button>
                        </div>
                       

                        <h3 className="mt-5 text-center mb-5 badge badge-warning"><b>Pasajes Reservados</b></h3>
                        {listaAdmin}
                    </>) :

                    cargando ?
                        <Cargando /> :
                        authData.user.id === 2 ?

                            (<>

                                <div className="filtros-perfil">
                                    <div className="form-group ">
                                        <label className="d-block font-weight-bold" htmlFor="viajeid">ID viaje <FaBusAlt className="ml-2" style={{ fontSize: 25 }} /></label>
                                        <input
                                            className="form-control inputs-filtros-perfil"
                                            type="text"
                                            value={viajeId}
                                            onChange={(e) => setViajeId(e.target.value)}
                                        />
                                        <button className="btn btn-success d-inline-block buscar-perfil" onClick={filtro}>Buscar</button>

                                        <button className="btn btn-primary limpiar-filtro" onClick={clear}>Limpiar</button>
                                    </div>
                                </div>
                                <h3 className="mt-5 text-center mb-5 badge badge-warning"><b>Pasajes Reservados</b></h3>
                                {listaEmpresa}
                            </>) :

                            cargando ?
                                <Cargando /> :
                                authData.user.id >= 3 ?
                                    (<>
                                        <h3 className="mt-5 text-center mb-5 badge badge-warning"><b>Pasajes Reservados</b></h3>
                                        {lista}

                                    </>) :

                                    (<>
                                    </>)
        }

    </div>);
}

export default Perfil;