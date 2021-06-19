import React from 'react';
import { useForm } from "react-hook-form";
import { API, FETCH_HEADERS } from "../constants";
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function EditarViaje(props) {

    const history = useHistory();
    const location = useLocation()
    var viaje;
    console.log(location);
    if (location.state) {
        viaje = location.state.item;
    } else {
        history.push('/viajes')
    }

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = async data => {
        const response = await fetch(API + '/viaje/edit/' + viaje.id, {
            method: 'PUT',
            headers: FETCH_HEADERS,
            body: JSON.stringify(data),
            credentials: 'include'
        });

        const fetchData = await response.json();
        history.push('/viajes')
        return { ...fetchData.data };

    };


    return (
        <div className="fondopantalla p-5">
            <h1 className="editar-perfil">Editar viaje</h1>
            <form className="form-editar-viajes"
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
                    {errors.name && <span className="alert alert-danger">El campo no puede estar vacio</span>}
                </div>

                <button type="submit" className="btn btn-primary boton-terminar-edit" >Terminar de editar</button>
            </form>

        </div>);
}

export default EditarViaje;
