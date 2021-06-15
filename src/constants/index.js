
export const API = "https://andiamo-back.herokuapp.com/api";

function token(){
    var token = localStorage.getItem('user');
    var tokenUser = '';
    if(token !== null){
      tokenUser =  'Bearer' + JSON.parse(localStorage.getItem('user')).token ;
    }

    return tokenUser;
}


export const FETCH_HEADERS = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Autorization' : token()
};
