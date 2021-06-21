import React, { useState, useRef } from 'react';
import { useHistory } from "react-router-dom";
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

    const refs = {

        logo: useRef(null),
    };


    const handleImageChange = ev => {

        const name = ev.target.name;
        const file = refs[name].current.files[0];


        const reader = new FileReader();

        reader.addEventListener('load', function () {

            setRegistro({
                ...registro,
                [name]: reader.result
            });
        });

        reader.readAsDataURL(file);
    };

    const handleChange = ev => {

        setRegistro({
            ...registro,

            [ev.target.name]: ev.target.value
        });
    };

    const handleSubmit = async ev => {
        ev.preventDefault();


        validateSchema
            .validate(registro, {
                abortEarly: false
            })
            .then(data => {

                setCargando(true);

            })
            .catch(err => {
                console.log("Error de validación: ", err);

                const nuevosErrores = { ...ErroresTotales };

                err.inner.forEach((error) => {
                    nuevosErrores[error.path] = [error.message];
                });

                setErrores(nuevosErrores);
            });

        try {
            const respuesta = await authService.registrarse(registro)

            setCargando(false);

            setErrores(ErroresTotales);
            setRegistro({
                name: '',
                logo: '',
                password: '',
                email: '',
            });
            console.log("El usuario se creo exitosamente", respuesta);
            
            if (typeof props.notExitosa === "function") {
                props.notExitosa({
                    ...respuesta.data
                });
            }
            history.push('/iniciar-sesion');


        } catch (error) {
            console.log('No se pudo crear el usuario', error)
        }
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

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="logo"><b>Logo</b></label>
                            <input
                                type="file"
                                id="logo"
                                name="logo"
                                className="form-control"
                                ref={refs.logo}
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <p>Previsualización de la imagen</p>
                            {registro.logo ? <img src={registro.logo} alt="Imagen seleccionada ." /> : 'No hay imagen'}
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mt-5" disabled={cargando}>{cargando ? <Cargando /> : 'Grabar'}</button>
                </fieldset>
            </form>

        </div>);
}

export default Registrarse;