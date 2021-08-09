import React, { useState, useContext } from 'react';
import authService, { AuthContext } from './../services/auth';
import { useHistory } from "react-router-dom";
import * as yup from "yup";


const validateSchema = yup.object().shape({


    email: yup.string().email('Email inválido').required('El campo email no puede estar vacío'),
    password: yup.string().required('La contraseña no puede estar vacia')

});

function FormularioLogin(props) {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const history = useHistory();
    const authData = useContext(AuthContext);

    const ErroresTotales = {
        email: null,
        password: null,
    };

    const [errores, setErrores] = useState(ErroresTotales);

    const handleChange = ev => {
        setUser({
            ...user,
            [ev.target.name]: ev.target.value
        });
    };

    const handleSubmit = ev => {
        ev.preventDefault();

        validateSchema
            .validate(user, {
                abortEarly: false
            })

            .then(data => {

        authService.login(user)
            .then(rta => {
                if (!rta.errors) {
                    setErrores(ErroresTotales);
                    setUser({
                        nombre: '',
                        logo: '',
                        informacion: '',
                    });
                    authData.updateAuthData(rta);
                    console.log("Login exitosamente");
                    if (typeof props.notExitosa === "function") {
                        props.notExitosa({
                            ...rta.data
                        });
                    }
                    history.push('/');
                } else {
                    setErrores(rta.errors);
                }
            })
            .catch(e => console.log("Error: ", e));
        })
        .catch(err => {
            console.log("Error de validación: ", err);
           
            const nuevosErrores = {...ErroresTotales};
           
            err.inner.forEach((error) => {
                nuevosErrores[error.path] = [error.message];
            });
            
            setErrores(nuevosErrores);
        });
    };

    return (<div>
        <form
            action="#"
            method="post"
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" name="email" id="email" className="form-control" value={user.email} onChange={handleChange} />
                {
                    errores.email ? (
                        <div className="alert alert-danger">{errores.email[0]}</div>
                    ) : null
                }
            </div>
            <div className="form-group">
                <label htmlFor="password"><b>Contraseña</b></label>
                <input type="password" name="password" id="password" className="form-control" value={user.password} onChange={handleChange} />
                {
                    errores.password ? (
                        <div className="alert alert-danger">{errores.password[0]}</div>
                    ) : null
                }
            </div>
            <a className="boton-registrar text-center" href="/codigo">¿Olvidaste tu contraseña?</a>

            <button type="submit" className="btn btn-primary boton-ingresar ">Ingresar</button>

            <a className="boton-registrar text-center" href="/registrarse">¿No tenes usuario? Registrate</a>

        </form></div>);
}

export default FormularioLogin;
