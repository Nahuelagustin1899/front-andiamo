
export const API = "https://andiamo-back.herokuapp.com/api";
export const FETCH_HEADERS = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Autorization' : JSON.parse(localStorage.getItem('user')).token !== undefined ? 'bearer' + JSON.parse(localStorage.getItem('user')).token : ''
};
