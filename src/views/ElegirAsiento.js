import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import { useLocation } from "react-router-dom";
import { GiSteeringWheel } from 'react-icons/gi';
import reservasService from '../services/reservas';
import Asientos from "./../components/Asientos";
import { Fragment } from 'react';
import { useHistory } from "react-router-dom";
import Cargando from "../components/Cargando";


function ElegirAsiento() {
  const location = useLocation()
  const [reservados, setReservados] = useState([]);
  const history = useHistory();
  const [cargando, setCargando] = useState(true);

  console.log(location);
  let viaje;
  if (location.state) {
    viaje = location.state.viaje;
    console.log(viaje);
  } else {
    history.push('/viajesusuarios')
  }

  useEffect(() => {
    console.log(location);
    if (location && location.state && location.state.viaje.id) {
      (async () => {
        const data = await reservasService.reservasViajes(location.state.viaje.id);
        setReservados(data);
        setCargando(false);
      })().catch(err => console.log("Error al traer las reservas: ", err));
    }
  }, [location]);



  return (
    <Fragment>{location && location.state && <div className="fondopantalla p-1">
      <h1 className="text-center mt-5 mb-5 nuevo"><b>Elegí tu asiento para viajar</b></h1>
      <div className="div-ocup-disp">
        <span className="disp">Disponible</span>
        <span className="ocupado">Ocupado</span>
      </div>
      <div className="container asientos-borde">
        <Button className="conductor" disabled="true" variant="info"> <GiSteeringWheel size={40} /></Button>
        {cargando ?
          <Cargando /> :
          <Asientos viaje_id={location.state.viaje.id} reservados={reservados} />
        }
      </div>

    </div>}
    </Fragment>
  );
}

export default ElegirAsiento;