import React, {useState, useRef} from 'react';
import {useHistory} from "react-router-dom";
import empresasService from "./../services/empresas";
import Cargando from "./Cargando";
import * as yup from "yup";

const validateSchema = yup.object().shape({
    
    
    nombre: yup.string().required('Tenés que elegir el nombre.').min(2, 'El nombre tiene que tener al menos 2 caracteres.'),
    informacion: yup.string().required('La información no puede estar vacia').min(10, 'La información tiene que tener al menos 10 caracteres'),
   
});

function CargarEmpresa(props) {
    
    const history = useHistory();

    const [empresa, setEmpresa] = useState({
        nombre: '',
        logo: null,
        informacion: '',
    });

    const ErroresTotales = {
        nombre: null,
        logo: null,
        informacion: null,
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

            setEmpresa({
                ...empresa,
                [name]: reader.result
            });
        });

        reader.readAsDataURL(file);
    };

    const handleChange = ev => {
       
        setEmpresa({
            ...empresa,
           
            [ev.target.name]: ev.target.value
        });
    };

    const handleSubmit = ev => {
        ev.preventDefault();

        
        validateSchema
            .validate(empresa, {
                abortEarly: false 
            })
            .then(data => {
                

                setCargando(true);
               
                empresasService.store(empresa)
                    .then(rta => {
                        setCargando(false);
                        if(!rta.errors) {
                            setErrores(ErroresTotales);
                            setEmpresa({
                                nombre: '',
                                logo: '',
                                informacion: '',
                            });
                            console.log("La empresa se creo exitosamente", rta);
                            
                            if(typeof props.notExitosa === "function") {
                                props.notExitosa({
                                    ...rta.data
                                });
                            }
                            history.push('/empresaspanel');
                        } else {
                            setErrores(rta.errors);
                        }
                    })
                    .catch(e => {
                        setCargando(false);
                        console.error('No se pudo crear la empresa ', e);
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


    return (<form className="form-alta-empresas" onSubmit={handleSubmit}>
        <fieldset disabled={cargando}>
            
            <div className="form-group">
                <label htmlFor="nombre"><b>Nombre</b></label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="form-control"
                    value={empresa.nombre}
                    onChange={handleChange}
                />
                {
                    errores.nombre ? (
                        <div className="alert alert-danger">{errores.nombre[0]}</div>
                    ) : null
                }
            </div>

            <div className="form-group">
                <label htmlFor="informacion"><b>Información</b></label>
                <input
                    type="text"
                    id="informacion"
                    name="informacion"
                    className="form-control"
                    value={empresa.informacion}
                    onChange={handleChange}
                />
                {
                    errores.informacion ? (
                        <div className="alert alert-danger">{errores.informacion[0]}</div>
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
                    {empresa.logo ? <img src={empresa.logo} alt="Imagen seleccionada ."/> : 'No hay imagen'}
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-5" disabled={cargando}>{cargando ? <Cargando/> : 'Grabar'}</button>
        </fieldset>
    </form>);
}

export default CargarEmpresa;
