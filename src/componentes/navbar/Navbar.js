import React, { useState } from "react";
import logo from './../images/logo.png';
import { Link } from "wouter";
import './Navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(!menu);
    }

    return(
        <div className="navbar">
            <div className="navbar__container">

                <div className="navbar__logo">
                    <Link to="/">
                        <img src={logo} alt="Atalanta" />
                    </Link>
                </div>

                <div className="navbar__icon" onClick={handleClick}>
                    <i className={menu ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"  } />
                </div>

                <ul className={menu ? "navbar__menu active" : "navbar__menu"}>

                    <li className="navbar__menu__item">
                        <Link onClick={handleClick}  className="navbar__menu__item--style" to="/">Inicio</Link>
                    </li>

                    <li className="navbar__menu__item">
                        <Link onClick={handleClick} className="navbar__menu__item--style" to="/Noticias">Noticias</Link>
                    </li>

                    <li className="navbar__menu__item">
                        <Link onClick={handleClick} className="navbar__menu__item--style" to="/Historia">Historia</Link>
                    </li>

                    <li className="navbar__menu__item">
                        <Link onClick={handleClick} className="navbar__menu__item--style" to="/Contacto">Contacto</Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar;