import React, {useState} from 'react';
import FormularioLogin from './../components/FormularioLogin';

function Login(props) {
    return (
    <div className="fondopantalla">
    <div className="container pt-3 box mt-5">
        <h1 className="text-center mb-4">Iniciar Sesión</h1>

        <FormularioLogin 
        notExitosa={props.notExitosa}/>
    </div></div>);
}

export default Login;
