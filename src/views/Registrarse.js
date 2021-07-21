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

 
    const [registrar, setRegistarse] = useState({
        name: '',
        logo: null,
        email: '',
        password: '',
    });

    const ErroresTotales = {
        name: null,
        logo: null,
        email: null,
        password: null,
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

        reader.addEventListener('load', function() {

            setRegistarse({
                ...registrar,
                [name]: reader.result
            });
        });

        reader.readAsDataURL(file);
    };

    const handleChange = ev => {
       
        setRegistarse({
            ...registrar,
           
            [ev.target.name]: ev.target.value
        });
    };

    const handleSubmit = ev => {
        ev.preventDefault();

        
        validateSchema.validate(registrar, {
                abortEarly: false 
            })
            .then(data => {
                

                setCargando(true);
               
                authService.registrarse(registrar)
                    .then(rta => {
                        setCargando(false);
                        if(!rta.errors) {
                            setErrores(ErroresTotales);
                            setRegistarse({
                                name: '',
                                logo: '',
                                email: '',
                                password: '',
                            });
                            console.log("El registro fue exitoso", rta);
                            
                            if(typeof props.notExitosa === "function") {
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
                        console.error('No se pudo registrar', e);
                    });
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


    return (
    <div className="fondopantalla p-4">
    <form className="form-registrarse" onSubmit={handleSubmit}>
        <fieldset disabled={cargando}>
            
            <div className="form-group">
                <label htmlFor="name"><b>Nombre</b></label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={registrar.name}
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
                    value={registrar.email}
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
                    value={registrar.password}
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
                    <label htmlFor="logo"><b>Avatar</b></label>
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
                    {registrar.logo ? <img className="img-registro" src={registrar.logo} alt="Imagen seleccionada ."/> : 'No hay imagen'}
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-5" disabled={cargando}>{cargando ? <Cargando/> : 'Grabar'}</button>
        </fieldset>
    </form></div>);
}
export default Registrarse;
