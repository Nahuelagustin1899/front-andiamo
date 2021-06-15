
export const API = "https://andiamo-back.herokuapp.com/api";
export const FETCH_HEADERS = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Autorization': storage.getItem('user') != undefined ? 'bearer ' + storage.getItem('user') : ''
};
