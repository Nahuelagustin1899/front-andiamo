import React from "react";
import { fallDown as Menu } from "react-burger-menu";
import bus from '../img/bus.png';

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const Nav = () => {
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
    </Menu>
    </div>
  );
};

export default Nav;
