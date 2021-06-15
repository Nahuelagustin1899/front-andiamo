
export const API = "https://andiamo-back.herokuapp.com/api";
export const FETCH_HEADERS = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Autorization': localStorage.getItem('user') != undefined ? 'bearer ' + localStorage.getItem('user') : ''
};
