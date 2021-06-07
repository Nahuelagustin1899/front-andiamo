
import {API, FETCH_HEADERS} from "./../constants";

let compras = [];

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
        compras = response.data;
        return compras;
    },



    
};

export default reservasService;
