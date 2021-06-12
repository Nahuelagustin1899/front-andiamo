import {API, FETCH_HEADERS} from "./../constants";

let empresas = [];

const empresasService = {
   
    async index() {
        const response = await fetch(API + '/empresa/index', {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        const fetchData = await response.json();
        empresas = fetchData.data;
        return empresas;
    },

    async delete(id) {
        const response = await fetch(API + '/empresa/' + id, {
            method: 'DELETE',
            headers: FETCH_HEADERS,
            credentials: 'include'
        });
        const fetchData = await response.json();
        if(!fetchData.success) {
            throw new Error('Error al eliminar la empresa :(');
        }
        return {...fetchData.data};
    },

    async store(data) {
        const response = await fetch(API + '/empresa', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: FETCH_HEADERS,
            credentials: 'include'
        });
        const fetchData = await response.json();
        if(!fetchData.success) {
            return {...fetchData};
        }
        return {...fetchData.data};
    }


    
    
};

export default empresasService;

