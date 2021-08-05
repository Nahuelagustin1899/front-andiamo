import React from 'react';
import { useForm } from "react-hook-form";
import { API } from "../constants";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


function EditarEmpresas(props) {


    const history = useHistory();

    const SignupSchema = yup.object().shape({
        nombre: yup.string().required('El campo nombre no puede estar vacío'),
    });
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(SignupSchema)
    });

    const urlbase = "https://andiamo-back.herokuapp.com/imgs/empresas/logos/";
    const [file, setFile] = React.useState();
    const location = useLocation()

   

    let empresa;
    console.log(location);
    if (location.state) {
        empresa = location.state.item;
    } else {
        history.push('/empresaspanel')
    }

    const handleFile = React.useCallback((event) => {
        const files = event?.target?.files
        if (files?.length) {
            setFile(files[0])
        }
    }, []);

    const onSubmit = async data => {

        console.log(data);
        const fd = new FormData();
        fd.append('nombre', data.nombre);
        fd.append('logo', file);
        console.log(fd);
        return axios.post(API + '/empresa/editar/' + empresa.id, fd, {
            headers: {
                credentials: 'include'
            }
        }
        ).then(({ data }) => {
            if (typeof props.notExitosa === "function") {
                props.notExitosa({
                    data
                });
                history.push('/empresaspanel')
            }
            /* history.push('/empresaspanel') */
        });

    };


    return (
        <div className="fondopantalla p-5">
            <h1 className="viajes">Editar Empresas</h1>
            <form className="form-editar-viajes"
                onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <label htmlFor="nombre">Nombre empresa</label>

                    <input
                        defaultValue={empresa.nombre}
                        type="text"
                        className="form-control mb-3"
                        {...register("nombre", { required: true })}
                    />
                    {errors.nombre && <span className="form-control alert alert-danger errores">{errors.nombre.message}</span>}
                </div>

                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="logo"><b>Logo</b></label>
                        <input
                            type="file"
                            className="form-control mb-2"
                            onChange={handleFile}
                        />
                    </div>
                    <div className="col-md-12">
                        <p>Previsualización de la imagen</p>
                        {empresa.logo ? <img defaultValue={empresa.logo} className="img-registro" src={urlbase + empresa.logo} alt="Imagen seleccionada ." /> : 'No hay imagen'}

                    </div>

                </div>

                <button type="submit" className="btn btn-primary btn-block" >Terminar de editar</button>
            </form>

        </div>);
}

export default EditarEmpresas;
