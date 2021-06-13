import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import {useLocation} from "react-router-dom";
import { GiSteeringWheel } from 'react-icons/gi';
import reservasService from '../services/reservas';
import Asientos from "./../components/Asientos";
import { Fragment } from 'react';



function ElegirAsiento() {
    const location = useLocation()
    const [reservados, setReservados] = useState([]);

          useEffect(() => {
            console.log(location);
              if(location && location.state && location.state.viaje.id){
                (async () => {
                  const data = await reservasService.reservasViajes(location.state.viaje.id);
                  setReservados(data);
              })().catch(err => console.log("Error al traer las reservas: ", err));
              }
          }, [location]);       

            
          
    return (<Fragment>{location && location.state && <div className='pt-3 mb-5'>
    <h1 className="text-center mt-5 mb-5 nuevo"><b>Elegí tu asiento para viajar</b></h1>

    <p className="alert-warning font-weigth-bold">Por el dsitanciamiento social, los asientos se dividirán en filas de 3.</p>
    
      <span className="disp">Disponible</span>
      <span className="ocupado">Ocupado</span>

      
    
     <div className="container asientos-borde">
    <Button className="conductor" disabled="true" variant="info"> <GiSteeringWheel size={40}/></Button>
    <span>       
            
            <Button 
            className="verde"
            variant="success">{location.state.viaje.cantidad_asientos} 
            </Button>                                          
    
    </span>
         <Asientos viaje_id = {location.state.viaje.id} reservados = {reservados}/>        
    </div> 

</div>}</Fragment>
       );
}

export default ElegirAsiento;