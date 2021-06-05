import React, { useContext } from 'react';
import { fallDown as Menu } from "react-burger-menu";
import bus from '../img/bus.png';
import authService, {AuthContext} from "../services/auth";
import { GiExitDoor } from 'react-icons/gi';
import { NavLink } from "react-router-dom";



const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const Nav = (props) => {

  const authData = useContext(AuthContext);

  const handleLogout = () => {
    authService
        .logout()
        .then(rta => {
            if(rta) {
                authData.updateAuthData({
                    id: null,
                    rol: null,
                    email: null,
                    name:null,
                });
                if(typeof props.notExitosa === "function") {
                    props.notExitosa({
                        ...rta.data
                    });
                }
            }
        })
        .catch(e => console.log('Error: ', e));
};

  return (<div>
    <div className="d-flex justify-content-center mt-4" >
         <img
        width="270" height="130" 
        src={bus}
        alt="First slide"
        />
    </div>
    <Menu noOverlay onStateChange={toggleMenu}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/blog">
        Blog
      </a>
      <a className="menu-item" href="/empresasusuarios">
        Empresas
      </a>
      <a className="menu-item" href="/empresaspanel">
        Panel empresas
      </a>
      <a className="menu-item" href="/viajesusuarios">
        Viajes
      </a>
      <a className="menu-item" href="/viajes">
        Panel viajes
      </a>
      {
      authData.user.id === null ?
            (<>
              <a className="menu-item" href="/iniciar-sesion">Iniciar Sesión</a>
                            
            </>) :
                        
            (<>
               <button
               type="button"
               className="btn btn-link nav-link letras"
              onClick={handleLogout}
              >{authData.user.email}<GiExitDoor size={30}/></button>
                           
            </>)
        }
    </Menu>
    </div>
  );
};

export default Nav;
