import React from "react";
import logo from '../assets/img/NavBar/logo.svg';
import logo_m from '../assets/img/NavBar/logo-m.svg';
import '../css/NavBar.css'

const NavBar = () => {
return(
    <header>
        <img className = "logoDesk" src={logo}/>
        <img className = "logoMobile" src={logo_m} />
        <nav className="menu">
            <ul>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>productos</li></a>
                <a href="#"><li>Contacto</li></a>
            </ul>
        </nav>
    </header>
);

}

export default NavBar;