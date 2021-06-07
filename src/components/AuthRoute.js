import React, {useState, useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from "../services/auth";

function AuthRoute(props) {
    const authData = useContext(AuthContext);

    return (
        authData.user.id !== null ?
            (<Route {...props}>
                {props.children}
            </Route>) :
            (<Redirect to="/iniciar-sesion" />)
    );
}

export default AuthRoute;
