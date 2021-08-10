import React from 'react';
import { useForm } from "react-hook-form";
import { API, FETCH_HEADERSS } from "../constants";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function CambiarPassword(props) {

    const SignupSchema = yup.object().shape({
        email: yup.string()
            .email("El email no es válido")
            .required("El campo email no puede estar vacío"),
        verification_code: yup.number()
            .required("El campo còdigo no puede estar vacío")
            .typeError('El campo no puede contener letras')
            .min(6, "El campo debe contener 6 dígitos"),
        password: yup.string()
            .required("La contraseña no puede estar vacía")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    const history = useHistory();

    const onSubmit = async data => {
        const response = await fetch(API + '/auth/passwordNew', {
            method: 'POST',
            headers: FETCH_HEADERSS,
            body: JSON.stringify(data),
            credentials: 'include'
        });


        const fetchData = await response.json();
        if (typeof props.notExitosa === "function") {
            props.notExitosa({
                ...fetchData.data
            });
            history.push('/iniciar-sesion')
        }

        return { ...fetchData.data };

    };

    return (
        <div className="fondopantalla p-5">
            <form className="divs container mt-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="mt-3 mb-5 text-center h2 font-weight-bold">Restablecer contraseña</h1>
                <div className="form-group">
                    <label htmlFor="precio"><b>Email</b></label>
                    <input
                        type="email"
                        className="form-control"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className="form-control alert alert-danger errores">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="cod"><b>Código</b></label>
                    <input
                        type="text"
                        className="form-control"
                        maxlength="6"
                        {...register("verification_code", { required: true })}
                    />
                    {errors.verification_code && <span className="form-control alert alert-danger errores">{errors.verification_code.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password"><b>Contraseña nueva</b></label>
                    <input
                        type="password"
                        className="form-control"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <span className="form-control alert alert-danger errores">{errors.password.message}</span>}
                </div>



                <button type="submit" className="btn btn-primary boton-terminar-edit" >Cambiar contraseña</button>
            </form>

        </div>
    );
}

export default CambiarPassword;