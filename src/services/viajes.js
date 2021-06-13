
import {API} from "./../constants";

let viajes = [];

const viajesService = {
    
    async index() {
      
        const fetchRes = await fetch(API + '/viaje/index', {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        const response = await fetchRes.json();
        viajes = response.data;
        return viajes;
    },

    async indexEmpresa() {
      
        const fetchRes = await fetch(API + '/viaje/index/empresa', {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        const response = await fetchRes.json();
        viajes = response.data;
        return viajes;
    },

    async indexTraerSelect() {
      
        const fetchRes = await fetch(API + '/viaje/index/select', {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        const response = await fetchRes.json();
        viajes = response.data;
        return viajes;
    },

    async indexTraerSelect2() {
      
        const fetchRes = await fetch(API + '/viaje/index/select2', {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        const response = await fetchRes.json();
        viajes = response.data;
        return viajes;
    },


    async delete(id) {
        const response = await fetch(API + '/viaje/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
               
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        const fetchData = await response.json();
        if(!fetchData.success) {
            throw new Error('Error al eliminar el viaje :(');
        }
        return {...fetchData.data};
    },

    async store(data) {
        const response = await fetch(API + '/viaje', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',         
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        const fetchData = await response.json();
        if(!fetchData.success) {
            return {...fetchData};
        }
        return {...fetchData.data};
    },



};

export default viajesService;
