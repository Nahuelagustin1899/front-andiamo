import React, {useState, useContext} from 'react';
import authService, {AuthContext} from './../services/auth';
import {useHistory} from "react-router-dom";


function FormularioLogin(props) {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const history = useHistory();
    const authData = useContext(AuthContext);

    const handleChange = ev => {
        setUser({
            ...user,
            [ev.target.name]: ev.target.value
        });
    };

    const handleSubmit = ev => {
        ev.preventDefault();
        authService.login(user)
            .then(rta => {
                if(rta) {
                    authData.updateAuthData(rta);
                    console.log("Login exitosamente");
                    if(typeof props.notExitosa === "function") {
                        props.notExitosa({
                            ...rta.data
                        });
                    }
                    history.push('/');
                }
            })
            .catch(e => console.log("Error: ", e));
    };

    return (<form
        action="#"
        method="post"
        onSubmit={handleSubmit}
    >
        <div className="form-group">
            <label htmlFor="email"><b>Email</b></label>
            <input type="email" name="email" id="email" className="form-control" value={user.email} onChange={handleChange} />
        </div>
        <div className="form-group">
            <label htmlFor="password"><b>Contraseña</b></label>
            <input type="password" name="password" id="password" className="form-control" value={user.password} onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary boton-ingresar">Ingresar</button>

        <a className="btn btn-success boton-registrar" href="/registrarse">Registrarse</a>
    </form>);
}

export default FormularioLogin;
