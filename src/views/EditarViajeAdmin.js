import React from 'react';
import { useForm } from "react-hook-form";
import { API, FETCH_HEADERS } from "../constants";
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from '@material-ui/core/TextField';
import KeyboardReturnSharpIcon from '@material-ui/icons/KeyboardReturnSharp';


function EditarViajeAdmin(props) {

    const history = useHistory();
    const location = useLocation()
    let viaje;
    console.log(location);
    if (location.state) {
        viaje = location.state.item;
    } else {
        history.push('/paneladmin')
    }

    const SignupSchema = yup.object().shape({
        precio: yup.string()
        .required('El campo precio no puede estar vacío'),
        fecha_salida: yup.date()
        .required('El campo fecha de salida no puede estar vacío')
        .min(new Date(2021, 7, 4), "No puede elegir fechas pasadas"),
        fecha_llegada: yup.date()
        .required('El campo fecha de llegada no puede estar vacío')
        .min(new Date(2021, 7, 4), "No puede elegir fechas pasadas"),
    });


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(SignupSchema)
    });


    const onSubmit = async data => {
        const response = await fetch(API + '/viaje/edit/' + viaje.id, {
            method: 'PUT',
            headers: FETCH_HEADERS,
            body: JSON.stringify(data),
            credentials: 'include'
        });

        const fetchData = await response.json();

        if (typeof props.notExitosa === "function") {
            props.notExitosa({
                ...fetchData.data
            });
            history.push('/paneladmin')
        }

        /* history.push('/viajes') */
        return { ...fetchData.data };

    };


    return (
        <div className="fondopantalla p-5">
            <h1 className="viajes-empresa">Editar viaje</h1>
            <a className="btn btn-primary" href="/paneladmin"><KeyboardReturnSharpIcon/></a>
            <form className="divs container mt-5"
                onSubmit={handleSubmit(onSubmit)}
            >

                <div className="form-group">
                    <label htmlFor="precio"><b>Precio</b></label>
                    <input
                        defaultValue={viaje ? viaje.precio : ''}
                        type="text"
                        className="form-control"
                        {...register("precio")}
                    />
                    {errors.precio && <span className="form-control alert alert-danger errores">{errors.precio.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="fecha_salida"><b>Fecha de salida</b></label>
                    <TextField
                        type="datetime-local"
                        defaultValue={viaje ? viaje.fecha_salida : ''}
                        className="form-control"
                        {...register("fecha_salida")}
                    />
                    {errors.fecha_salida && <span className="form-control alert alert-danger errores">{errors.fecha_salida.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="fecha_llegada"><b>Fecha de llegada</b></label>
                    <TextField
                        type="datetime-local"
                        defaultValue={viaje ? viaje.fecha_llegada : ''}
                        className="form-control"
                        {...register("fecha_llegada")}
                    />
                    {errors.fecha_llegada && <span className="form-control alert alert-danger errores">{errors.fecha_llegada.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary boton-terminar-edit" >Terminar de editar</button>
            </form>

        </div>);
}

export default EditarViajeAdmin;
