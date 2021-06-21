import React from 'react';
import {API, FETCH_HEADERS} from "../constants";

let userData = {
    id: null,
    rol: null,
    email: null,
    name:null,
    logo:null
};

if(localStorage.getItem('user') !== null) {
    userData = JSON.parse(localStorage.getItem('user'));
}


const AuthContext = React.createContext({
    user: userData,
    updateAuthData(data) {}
});


AuthContext.displayName = "AuthContext";

const authService = {
  
    async login(credenciales) {
        const rta = await fetch(API + '/auth/login', {
            headers: FETCH_HEADERS,
            method: 'post',
            body: JSON.stringify(credenciales),
         
            credentials: "include"
        });
        const respuesta = await rta.json();

        if(respuesta.success) {
            userData = respuesta.user;
            localStorage.setItem('user', JSON.stringify(userData));
            return {...userData}; 
        }
        return false;
    },

    async registrarse(data) {

        return await fetch(API + '/auth/registrarse', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: FETCH_HEADERS,
            credentials: 'include',
            mode: 'no-cors'
        });
     } ,

    async logout() {
        var token = localStorage.getItem('user');
        if(token !== null){
            FETCH_HEADERS.Authorization  =  'Bearer ' + JSON.parse(localStorage.getItem('user')).token ;
        }

        const rta = await fetch(API + '/auth/logout', {
            headers: FETCH_HEADERS,
            method: 'post',
            credentials: "include"
        });
        const respuesta = await rta.json();
        if(respuesta.success) {
            userData = {
                id: null,
                rol: null,
                email: null,
                name: null,
                logo:null,
            };
            localStorage.removeItem('user');
            return true; 
        }
        return false;
    },

    
    getUserData() {
        return {...userData};
    }
};

export default authService;

export {AuthContext};
