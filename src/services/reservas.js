
import {API, FETCH_HEADERS} from "./../constants";

let reservas = [];

const reservasService = {
    
    async reservasViajes(id) {
      
        const fetchRes = await fetch(API + '/reserva/viajes/' + id, {
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            credentials: 'include'
        });
        const response = await fetchRes.json();
        reservas = response.data;
        return reservas;
    },

    async index() {
      
        const fetchRes = await fetch(API + '/reserva/index', {
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            credentials: 'include'
        });
        const response = await fetchRes.json();
        reservas = response.data;
        return reservas;
    },



    
};

export default reservasService;
