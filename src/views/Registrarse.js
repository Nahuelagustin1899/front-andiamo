import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import authService from '../services/auth';
import Cargando from "../components/Cargando";
import * as yup from "yup";


const validateSchema = yup.object().shape({
    
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),


   
});

function Registrarse(props) {
    const history = useHistory();
    const [registro, setRegistro] = useState({
        name: '',
        logo: null,
        password: '',
        email: '',
    });

    const ErroresTotales = {
        name: null,
        logo: null,
        password: null,
        email: null,
    };
    const [errores, setErrores] = useState(ErroresTotales);
    const [cargando, setCargando] = useState(false);

    const handleChange = ev => {

        setRegistro({
            ...registro,

            [ev.target.name]: ev.target.value
        });
    };

    const handleSubmit = ev => {
        ev.preventDefault();


        validateSchema
            .validate(registro, {
                abortEarly: false
            })
            .then(data => {


                setCargando(true);

                authService.registrarse(registro)
                    .then(rta => {
                        setCargando(false);
                        if (!rta.errors) {
                            setErrores(ErroresTotales);
                            setRegistro({
                                name: '',
                                logo: '',
                                password: '',
                                email: '',
                            });
                            console.log("El usuario se creo exitosamente", rta);

                            if (typeof props.notExitosa === "function") {
                                props.notExitosa({
                                    ...rta.data
                                });
                            }
                            history.push('/iniciar-sesion');
                        } else {
                            setErrores(rta.errors);
                        }
                    })
                    .catch(e => {
                        setCargando(false);
                        console.error('No se pudo crear el usuario ', e);
                    });
            })
            .catch(err => {
                console.log("Error de validación: ", err);

                const nuevosErrores = { ...ErroresTotales };

                err.inner.forEach((error) => {
                    nuevosErrores[error.path] = [error.message];
                });

                setErrores(nuevosErrores);
            });
    };

    return (
        <div className="fondopantalla p-5">
            
                <form onSubmit={handleSubmit} 
                      className="form-registrarse">
                    <fieldset disabled={cargando}>
                    <h1 className="text-center text-weight-bold">Registrate</h1>
                        <div className="form-group">
                            <label htmlFor="nombre"><b>Nombre</b></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                value={registro.name}
                                onChange={handleChange}
                            />
                            {
                                errores.name ? (
                                    <div className="alert alert-danger">{errores.name[0]}</div>
                                ) : null
                            }
                        </div>

                        <div className="form-group">
                            <label htmlFor="email"><b>Email</b></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                value={registro.email}
                                onChange={handleChange}
                            />
                            {
                                errores.email ? (
                                    <div className="alert alert-danger">{errores.email[0]}</div>
                                ) : null
                            }

                        </div>

                        <div className="form-group">
                            <label htmlFor="password"><b>Contraseña</b></label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                value={registro.password}
                                onChange={handleChange}
                            />
                            {
                                errores.password ? (
                                    <div className="alert alert-danger">{errores.password[0]}</div>
                                ) : null
                            }

                        </div>

                        <button type="submit" className="btn btn-primary btn-block mt-5" disabled={cargando}>{cargando ? <Cargando /> : 'Registrarse'}</button>
                    </fieldset>
                </form>
           
        </div>);
}

export default Registrarse;
