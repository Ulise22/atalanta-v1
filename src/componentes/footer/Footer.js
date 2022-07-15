import React from "react";
import sevenUp from './../patrocinios/7up.png';
import disney from './../patrocinios/disney.png';
import fanta from './../patrocinios/fanta.png';
import foxSport from './../patrocinios/fox-sport.png';
import gatorade from './../patrocinios/gatorade.png';
import off from './../patrocinios/off.png';
import plus500 from './../patrocinios/plus500.png';
import playstation from './../patrocinios/playstation.png';
import radiciGroup from './../patrocinios/radici-group.png';
import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__container">
                <div className="footer__patrocinios">
                    <div className="footer__patrocinios__imagen">
                        <img src={sevenUp} alt="sevenUp" />
                    </div>
                    <div className="footer__patrocinios__imagen">
                        <img src={disney} alt="disney" />
                    </div>
                    <div className="footer__patrocinios__imagen">
                        <img src={fanta} alt="fanta" />
                    </div>
                    <div className="footer__patrocinios__imagen">
                        <img src={foxSport} alt="fox Sports" />
                    </div>
                    <div className="footer__patrocinios__imagen">
                        <img src={gatorade} alt="Gatorade" />
                    </div>
                    <div className="footer__patrocinios__imagen">
                        <img src={off} alt="off" />
                    </div>
                    <div className="footer__patrocinios__imagen">
                        <img src={plus500} alt="plus500" />
                    </div>
                    <div className="footer__patrocinios__imagen">
                        <img src={playstation} alt="PlayStation" />
                    </div>
                    <div className="footer__patrocinios__imagen">
                        <img src={radiciGroup} alt="Radici Group" />
                    </div>
                </div>

                <div className="footer__text">
                    <a href="/" className="footer__text__a">Terminos y Condiciones</a>
                    <a href="/" className="footer__text__a">Contactanos</a>
                    <a href="/" className="footer__text__a">Politica de Privacidad</a>
                    <h4>Atalanta Bergamasca Calcio ©2022 Todos los derechos reservados</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer;