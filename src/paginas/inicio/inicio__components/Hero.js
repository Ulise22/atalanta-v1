import React from "react";
import atalanta from './../../../componentes/images/logo.png';
import newcastle from './../../../componentes/images/Newcastle_United.png';
import juventus from './../../../componentes/images/juventus.png';
import './Hero.css';

const Hero = () => {
    return(
        <div className="hero">

            <div className="hero__content inicio__container">
                <div className="content__titulo">
                    <h2>¡Jeremie Boga esta Aqui!</h2>
                </div>
                <div className="content__bigPromo">
                    <div className="content__bigPromo__img" />
                    <div className="content__bigPromo__container">
                        <span className="content__promo__up">Noticias</span>
                        <h3 className="content__bigPromo__titulo">¡Jérémie Boga LLega Proveniente del Sassuolo!</h3>
                        <p className="content__bigPromo__text">Atalanta se hace con el jugador, proveniente del Sassuolo. Pagando $20 millones por la totalidad del pase. El futbolista que se mostró contento por su llegada al conjunto Begamasco, se unira al entrenamiento con sus compañeros en las proximas horas.</p>
                    </div>
                </div>
                <div className="content__promo__container">
                    <div className="content__promo">
                        <div className="content__promo1__img" />
                        <div className="content__promo__text">
                            <span className="content__promo__up">Galería</span>
                            <h3 className="content__promo__titulo">Galería: Mira los mejores momentos de Boga en su debut</h3>
                        </div>
                    </div>
                    <div className="content__promo content-1">
                        <div className="content__promo2__img" />
                        <div className="content__promo__text">
                            <span className="content__promo__up">Noticias</span>
                            <h3 className="content__promo__titulo">¡Confirmado! Jérémie Boga Lucirá la n°10</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero__sidebar">
                <div className="sidebar__nextMatch">
                    <p>Viernes 8 de julio</p>
                    <span className="sidebar__span">Partido Amistoso</span>
                    <div className="sidebar__nextMatch__container">
                        <div><img src={atalanta} alt="Atalanta" className="sidebar__nextMatch__img" /> <p>Atalanta</p></div> 
                        V
                        <div><img src={newcastle} alt="Newcastle United" className="sidebar__nextMatch__img" /> <p>Newcastle United</p> </div>
                    </div>
                    <a>Noticias y Previa ></a>
                </div>

                <div className="sidebar__btn">
                    Ver Calendario
                </div>

                <div className="sidebar__lastMatch">
                    <span className="sidebar__span">Último Partido</span>
                    <div className="sidebar__lastMatch__container">
                        <img src={juventus} alt="Juventus" className="sidebar__lastMatch__img" />
                        <p>Juventus 1-1</p>
                    </div>
                    <a href="/">Resumen</a>
                </div>
                
                <div className="sidebar__social">
                    <h1 className="sidebar__social__titulo">¡Siguenos!</h1>
                    <div className="sidebar__social__container">
                        <div className="sidebar__social__item">
                            <i className="fab fa-facebook-f fa-2x" />
                        </div>
                        <div className="sidebar__social__item">
                            <i className="fab fa-twitter fa-2x" />
                        </div>
                        <div className="sidebar__social__item">
                            <i className="fab fa-instagram fa-2x" />
                        </div>
                        <div className="sidebar__social__item">
                            <i className="fab fa-snapchat-ghost fa-2x" />
                        </div>
                        <div className="sidebar__social__item">
                            <i className="fab fa-tiktok fa-2x" />
                        </div>
                        <div className="sidebar__social__item">
                            <i className="fab fa-tumblr fa-2x" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;