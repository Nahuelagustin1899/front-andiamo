import React from 'react';
import { useForm } from "react-hook-form";
import { API, FETCH_HEADERSS } from "../constants";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function EnviarCodigo(props) {

    const SignupSchema = yup.object().shape({
        email: yup.string()
            .email("El email no es válido")
            .required("El campo email no puede estar vacío"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    const history = useHistory();

    const onSubmit = async data => {
        const response = await fetch(API + '/auth/codigo', {
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
            history.push('/cambiarpassword')
        }

        return { ...fetchData.data };

    };

    return (
        <div className="fondopantalla p-5">


            <form className="divs container mt-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="mt-3 mb-5 text-center h2 font-weight-bold">Generar código</h1>
                <p className="text-center mb-5">Escribí tu email para que te pueda llegar un código y asi restablecer tu contraseña</p>

                <div className="form-group">
                    <label htmlFor="precio"><b>Email</b></label>
                    <input
                        type="email"
                        className="form-control"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className="form-control alert alert-danger errores">{errors.email.message}</span>}
                </div>



                <button type="submit" className="btn btn-primary boton-terminar-edit" >Enviar código</button>
            </form>

        </div>
    );
}

export default EnviarCodigo;