import React, {useState, useContext, useEffect} from 'react';
import authService, {AuthContext} from "../services/auth";
import reservasService from "./../services/reservas";
import Table from 'react-bootstrap/Table';
import tevez from '../img/tevez.png';
import {format} from 'date-fns';

function Perfil() {

    const [reservas, setReservas] = useState([]);
    const urlbase = "http://localhost:8000/imgs/perfiles/logos/" ;


    useEffect(() => {
        (async () => {
            const data = await reservasService.index();
            setReservas(data);
        })().catch(err => console.log("Error al traer las reservas: ", err));
    }, []);
    
    const lista = reservas && reservas.map(reserva => ( <div key={reserva.id}>
       

            <Table  variant="warning" striped bordered hover   >
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

            <Table  variant="warning" striped bordered hover   >
                <thead>
                    <tr className="row">
                    <th className="col-4 text-center colorth">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="row"> 
                    <td className="col-4 text-center colortd">{reserva.viaje.precio}</td>
                    </tr>
                </tbody>
            </Table>

            <hr className="perfileshr" />
        
            </div> ));

        

    const authData = useContext(AuthContext);
    console.log(authData);

    return (<div className='container pt-3 '>
        <h1 className="viajes mb-5">Perfil</h1>
        <div className="caja-perfil">
        <img className="imagen"  src={urlbase + authData.user.logo} alt={authData.user.nombre} /> 
        <p className="text-center mb-5 mt-4 email"><b>Nombre :</b>  {authData.user.name}</p>
        </div>
        <h3 className="text-center mb-5 pasajes"><b>Pasajes Reservados</b></h3>
            {lista}
        </div>);
}

export default Perfil;