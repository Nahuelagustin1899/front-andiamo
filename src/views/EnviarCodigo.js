import React from 'react';
import { useForm } from "react-hook-form";
import { API, FETCH_HEADERS } from "../constants";
import { useHistory } from "react-router-dom";

function EnviarCodigo() {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = async data => {
        const response = await fetch(API + '/auth/codigo/', {
            method: 'POST',
            headers: FETCH_HEADERSS,
            body: JSON.stringify(data),
            credentials: 'include'
        });

        const fetchData = await response.json();
        history.push('/cambiarpassword')
        return { ...fetchData.data };

    };

  return (
    <div className="fondopantalla p-5">
      <h1 className="mt-3 mb-5 text-center">Enviar codigo</h1>

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

               

                <button type="submit" className="btn btn-primary boton-terminar-edit" >Enviar</button>
            </form>

      </div>
   );
}

export default EnviarCodigo;