import React, { useContext } from 'react';
import { fallDown as Menu } from "react-burger-menu";
import bus from '../img/bus.png';
import authService, { AuthContext } from "../services/auth";
import { useHistory } from "react-router-dom";


const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};
const urlbase = "https://andiamo-back.herokuapp.com/imgs/perfiles/logos/" ;
const Nav = (props) => {

  const authData = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    authService
      .logout()
      .then(rta => {
        if (rta) {
          authData.updateAuthData({
            id: null,
            rol: null,
            email: null,
            name: null,
            logo: null,
          });
          if (typeof props.notExitosa === "function") {
            props.notExitosa({
              ...rta.data
            });
            history.push('/iniciar-sesion')
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


      {
        authData.user.id === 1 ?
          (<>
            <a className="menu-item bm-item" href="/perfil">
              <img className="imagenperfil" src={urlbase + authData.user.logo} alt={authData.user.nombre} />
            </a>
          </>) :

          authData.user.id === 2 ?

            (<>

              <a className="menu-item bm-item" href="/perfil">
                <img className="imagenperfil" src={urlbase + authData.user.logo} alt={authData.user.nombre} />
              </a>
            </>) :
            authData.user.id >= 3 ?
              (<>

                <a className="menu-item bm-item" href="/perfil">
                  <img className="imagenperfil" src={urlbase + authData.user.logo} alt={authData.user.nombre} />
                </a>

              </>) :


              (<>
                <a className="menu-item bm-item" href="/perfil">Perfil
                </a>
              </>)
      }
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/blog">
        Blog
      </a>
      <a className="menu-item" href="/empresasusuarios">
        Empresas
      </a>
      {
        authData.user.id === 1 ?
          (<>
            <a className="menu-item bm-item" href="/empresaspanel">
              Panel empresas
      </a>
          </>) :
          (<>

          </>)

      }
      <a className="menu-item" href="/viajesusuarios">
        Viajes
      </a>
      {
        authData.user.id === 2 ?
          (<>
            <a className="menu-item bm-item" href="/viajes">
              Panel viajes
      </a>
          </>) :
          (<>

          </>)
      }
      {
        authData.user.id === 1 ?
          (<>
            <a className="menu-item bm-item" href="/paneladmin">
              Panel viajes
            </a>
          </>) :
          (<>

          </>)
      }
      {
        authData.user.id === null ?
          (<>
            <a className="menu-item bm-item" href="/iniciar-sesion">Iniciar Sesión</a>

          </>) :

          (<>
            <button
              type="button"
              className="btn btn-link nav-link iniciar-sesion"
              onClick={handleLogout}
            >Cerrar sesión</button>

          </>)
      }
    </Menu>
  </div>
  );
};

export default Nav;
