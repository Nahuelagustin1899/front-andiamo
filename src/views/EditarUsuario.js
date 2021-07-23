import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from "../services/auth";
import { API} from "../constants";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function EditarUsuario(props) {


    const authData = useContext(AuthContext);
    const history = useHistory();
    console.log(authData);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const urlbase = "https://andiamo-back.herokuapp.com/imgs/perfiles/logos/";
    

    const [file, setFile] = React.useState();

    const handleFile = React.useCallback((event) => {
        const files = event?.target?.files
        if (files?.length) {
            setFile(files[0])
        }
    }, []);

    const onSubmit = async data => {
       
            console.log(data);
            const fd = new FormData();
            fd.append('name', data.name);
            fd.append('logo', file);
            console.log(fd);
            
            return axios.post(API + '/auth/editar/' + authData.user.id, fd, {
                headers: {
                    credentials: 'include'
                }
            }
            ).then(({ data }) => {
                
                localStorage.setItem('user', JSON.stringify(data?.data));
                authData.updateAuthData(data?.data)                
                history.push('/perfil')
                
                if (typeof props.notExitosa === "function") {
                    props.notExitosa({
                        ...rta.data
                    });
                }
            });

      
    };

    return (
        <div className="fondopantalla p-5">
            <h1 className="viajes">Editar Perfil</h1>
            <form className="form-editar-viajes"
                onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <label htmlFor="nombre"><b>Nombre</b></label>

                    <input
                        defaultValue={authData.user.name}
                        type="text"
                        className="form-control"
                        {...register("name", { required: true })}
                    />
                    {errors.name && errors.name.type === "required" && <span className="alert alert-danger">This is required</span>}
                </div>

                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="logo"><b>Avatar</b></label>
                        <input
                            type="file"
                            className="form-control"
                            onChange={handleFile}
                        />
                    </div>
                    <div className="col-md-12">
                        <p>Previsualización de la imagen</p>
                        {authData.user.logo ? <img defaultValue={authData.user.logo} className="img-registro" src={urlbase + authData.user.logo} alt="Imagen seleccionada ." /> : 'No hay imagen'}
                    </div>

                </div>

                <button type="submit" className="btn btn-primary btn-block mt-5" >Terminar de editar</button>
            </form>

        </div>);
}

export default EditarUsuario;
