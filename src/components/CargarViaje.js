import React, {useState} from 'react';
import viajesService from "./../services/viajes";
import Cargando from "./Cargando";
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import * as yup from "yup";

const validateSchema = yup.object().shape({
    
    empresa_id: yup.number().typeError('La empresa no puede estar vacia'),
    salida_id: yup.number().typeError('La salida no puede estar vacia'),
    destino_id: yup.number().typeError('El destino no puede estar vacio'),
    fecha_salida: yup.date().typeError('La fecha de salida no puede estar vacia'),
    fecha_llegada: yup.date().typeError('La fecha de llegada no puede estar vacia'),
    precio: yup.number().typeError('El precio no puede estar vacio'),
});

function CargarViaje(props) {

    const history = useHistory();
    const ErroresTotales = {
        empresa_id: null,
        salida_id: null,
        destino_id: null,
        fecha_salida:null,
        fecha_llegada:null,
        cantidad_asientos:null,
        precio:null,
        
    }

    const [errores, setErrores] = useState({ErroresTotales});
    const[viaje, setViajes] = useState({
        empresa_id: "",
        salida_id: "",
        destino_id: "",
        fecha_salida:"",
        fecha_llegada:"",
        cantidad_asientos:"20",
        precio:""

    });

    const [cargando, setCargando] = useState(false);
    const handleChange = ev => {
        
        setViajes({
            ...viaje,
            
            [ev.target.name]: ev.target.value
        });
    };

    const handleSubmit = ev =>{
        ev.preventDefault();

        validateSchema
            .validate(viaje, {
                abortEarly: false 
            })

            .then(data => {
                
        setCargando(true);

        viajesService.store(viaje)
            .then(rta => {
                setViajes({
                    empresa_id: '',
                    salida_id: '',
                    destino_id: '',
                    fecha_salida:'',
                    fecha_llegada:'',
                    cantidad_asientos:'',
                    precio:''
                });
                setCargando(false);
                
                if(!rta.errors){
                    console.log("Viaje creado con éxito" , rta);
                    setErrores({ErroresTotales });

                } else {
                    setErrores(rta.errors);
                }

                if(typeof props.notExitosa === "function") {
                    props.notExitosa({
                        ...rta.data
                    });
                }
                
                history.push('/viajes'); 
              
            })
            .catch(e => console.error('Error al crear el viaje'))
            })

            .catch(err => {
                console.log("Error de validacion:", err)

                const nuevosErrores = {...ErroresTotales};
               
                err.inner.forEach((error) => {
                    nuevosErrores[error.path] = [error.message];
                });
                
                setErrores(nuevosErrores);
            });

            

    };

    
    return (<form onSubmit={handleSubmit}>
            

            <div className="form-group">
                <label htmlFor="empresa_id"><b>Empresa</b></label>
                <input
                    type="text"
                    id="empresa_id"
                    name="empresa_id"
                    placeholder="Tendra que poner el número 1 que le corresponde a Ruta Atlántica"
                    className="form-control"
                    value={viaje.empresa_id}
                    onChange={handleChange}
                />
                {
                    errores.empresa_id ? (
                        <div className="alert alert-danger">{errores.empresa_id[0]}</div>
                    ) : null
                }
            </div>

            <div className="form-group">
                <label htmlFor="salida_id"><b>Estacion de salida</b></label>
                <input
                    type="text"
                    id="salida_id"
                    name="salida_id"
                    placeholder="Estacion de salida"
                    className="form-control"
                    value={viaje.salida_id}
                    onChange={handleChange}
                />
                {
                    errores.salida_id ? (
                        <div className="alert alert-danger">{errores.salida_id[0]}</div>
                    ) : null
                }
            </div>

            <div className="form-group">
                <label htmlFor="destino_id"><b>Estacion de destino</b></label>
                <input
                    type="text"
                    id="destino_id"
                    name="destino_id"
                    placeholder="Estacion de salida"
                    className="form-control"
                    value={viaje.destino_id}
                    onChange={handleChange}
                />
                {
                    errores.destino_id ? (
                        <div className="alert alert-danger">{errores.destino_id[0]}</div>
                    ) : null
                }
            </div>

             <div className="form-group">
                 <label htmlFor="fecha_salida"><b>Fecha de salida</b></label>
                    <TextField
                            id="fecha_salida"
                            type="date"
                            name="fecha_salida"
                            value={viaje.fecha_salida}
                            className="form-control"
                            onChange={handleChange}
                        />
                        {
                    errores.fecha_salida ? (
                        <div className="alert alert-danger">{errores.fecha_salida[0]}</div>
                    ) : null
                }
            </div> 

            <div className="form-group">
                 <label htmlFor="fecha_llegada"><b>Fecha de llegada</b></label>
                    <TextField
                            id="fecha_llegada"
                            type="date"
                            name="fecha_llegada"
                            value={viaje.fecha_llegada}
                            className="form-control"
                            onChange={handleChange}
                            
                        />

{
                    errores.fecha_llegada ? (
                        <div className="alert alert-danger">{errores.fecha_llegada[0]}</div>
                    ) : null
                }
            </div> 

            <div className="form-group">
                <label htmlFor="precio"><b>Precio</b></label>
                <input
                    type="text"
                    id="precio"
                    name="precio"
                    placeholder="Precio del pasaje"
                    className="form-control"
                    value={viaje.precio}
                    onChange={handleChange}
                />
                {
                    errores.precio ? (
                        <div className="alert alert-danger">{errores.precio[0]}</div>
                    ) : null
                }
            </div>

            <div className="form-group">
                <label htmlFor="asientos"><b>Cantidad asientos</b></label>
                <input
                    type="text"
                    id="asientos"
                    name="asientos"
                    className="form-control"
                    value={viaje.cantidad_asientos}
                    onChange={handleChange}
                />
                
            </div>

            <button type="submit" className="btn btn-primary button-grabar"  disabled={cargando}>{cargando ? <Cargando/> : 'Grabar'}</button>

    </form>);
}

export default CargarViaje;