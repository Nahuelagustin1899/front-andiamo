import React from 'react';
import { useForm } from "react-hook-form";
import { API, FETCH_HEADERSS} from "../constants";
import { useHistory } from "react-router-dom";

function CambiarPassword(props) {

    const { register, handleSubmit } = useForm();
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
      <h1 className="mt-3 mb-5 text-center">Cambiar contraseña</h1>

      <form className="divs container mt-5"
                onSubmit={handleSubmit(onSubmit)}
            >

                <div className="form-group">
                    <label htmlFor="precio"><b>Email</b></label>
                    <input
                        type="email"
                        className="form-control"
                        {...register("email", { required: true })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cod"><b>Codigo</b></label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("verification_code", { required: true })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password"><b>Contraseña</b></label>
                    <input
                        type="password"
                        className="form-control"
                        {...register("password", { required: true })}
                    />
                </div>

               

                <button type="submit" className="btn btn-primary boton-terminar-edit" >Enviar</button>
            </form>

      </div>
   );
}

export default CambiarPassword;