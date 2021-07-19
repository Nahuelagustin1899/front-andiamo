import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from "../services/auth";
import reservasService from "./../services/reservas";
import Table from 'react-bootstrap/Table';
import { format } from 'date-fns';
import { Link } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit.js';

function Perfil() {

    const [reservas, setReservas] = useState([]);
    const urlbase = "https://andiamo-back.herokuapp.com/imgs/perfiles/logos/";
    const [empresasReservas, setEmpresasReservas] = useState([]);
    const { viajes } = empresasReservas;

    useEffect(() => {
        (async () => {
            const data = await reservasService.index();
            setReservas(data);

        })().catch(err => console.log("Error al traer las reservas: ", err));
    }, []);

    console.log(reservas);

    useEffect(() => {
        (async () => {
            const data = await reservasService.indexEmpresa();
            setEmpresasReservas(data);
            console.log(data);
        })().catch(err => console.log("Error al traer las reservas: ", err));

    }, []);



    const lista = reservas && reservas.map(reserva => (<div key={reserva.id}>


        <Table variant="warning" striped bordered hover   >
            <thead>
                <tr className="row">
                    <th className="col-4 text-center colorth">Nombre</th>
                    <th className="col-4 text-center colorth">Fecha salida</th>
                    <th className="col-4 text-center colorth">Fecha llegada</th>
                </tr>
            </thead>
            <tbody>
                <tr className="row">
                    <td className="col-4 text-center colortd">{reserva.user.name}</td>
                    <td className="col-4 text-center colortd">{format(new Date(reserva.viaje.fecha_salida), 'dd-MM-yyyy hh:mm:ss a')}</td>
                    <td className="col-4 text-center colortd">{format(new Date(reserva.viaje.fecha_llegada), 'dd-MM-yyyy hh:mm:ss a')}</td>
                </tr>
            </tbody>
        </Table>

        <Table variant="warning" striped bordered hover   >
            <thead>
                <tr className="row">
                    <th className="col-4 text-center colorth">Precio</th>
                    <th className="col-4 text-center colorth">Salida</th>
                    <th className="col-4 text-center colorth">Destino</th>
                </tr>
            </thead>
            <tbody>
                <tr className="row">
                    <td className="col-4 text-center colortd">{reserva.viaje.precio}</td>
                    <td className="col-4 text-center colortd">{reserva.viaje.salida.nombre}</td>
                    <td className="col-4 text-center colortd">{reserva.viaje.destino.nombre}</td>
                </tr>
            </tbody>
        </Table>



        <hr className="perfileshr" />

    </div>));


    const listaEmpresa = empresasReservas && empresasReservas.map(reserva => (<div key={reserva.id}>


        <Table variant="warning" striped bordered hover   >
            <thead>
                <tr className="row">
                    <th className="col-4 text-center colorth">Nombre</th>
                    <th className="col-4 text-center colorth">Precio</th>
                </tr>
            </thead>
            <tbody>
                <tr className="row">
                    <td className="col-4 text-center colortd">{reserva.nombre}</td>
                    <td className="col-4 text-center colortd">{viajes.precio}</td>
                </tr>
            </tbody>
        </Table>




        <hr className="perfileshr" />

    </div >));


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
            <p className="text-center badge badge-warning nombre-perfil"><b>Nombre :</b>  {authData.user.name}</p>
        </div>
        <h3 className="mt-5 text-center mb-5 badge badge-warning"><b>Pasajes Reservados</b></h3>

        {
            authData.user.id === 1 ?
                (<>
                    <p>No hay viajes</p>
                </>) :

                authData.user.id === 2 ?

                    (<>
                        {listaEmpresa}
                    </>) :
                    authData.user.id >= 3 ?
                        (<>

                            {lista}

                        </>) :

                        (<>


                        </>)

        }

    </div>);
}

export default Perfil;