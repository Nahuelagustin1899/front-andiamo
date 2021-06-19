import React, {useContext} from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from "../services/auth";
import {API, FETCH_HEADERS} from "../constants";
import { useHistory } from "react-router-dom";

function EditarUsuario() {


    const authData = useContext(AuthContext);
    console.log(authData);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();

    const onSubmit = async data => {   
         const response = await fetch(API + '/auth/editar/' + authData.user.id, {
            method: 'PUT',
            headers: FETCH_HEADERS,
            body: JSON.stringify(data),
            credentials: 'include'
        }); 

        const fetchData = await response.json();
        localStorage.setItem('user', JSON.stringify(fetchData.data));
        history.push('/');
       
        return { ...fetchData.data}; 

    };


    return (
        <div className="fondopantalla p-5">
            <h1 className="editar-perfil">Editar Perfil</h1>
            <form className="form-editar-viajes"
                onSubmit={handleSubmit(onSubmit)}>
   
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        defaultValue={authData.user.name}
                        type="nombre"
                        className="form-control"
                        {...register("name")}
                    />
                    {errors.name && <span className="alert alert-danger">El campo no puede estar vacio</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Terminar de editar</button>
            </form>

        </div>);
}

export default EditarUsuario;
