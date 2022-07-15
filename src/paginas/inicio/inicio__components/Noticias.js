import React from "react";
import { Link } from "wouter";
import './Noticias.css';

const Noticias = () => {
    return(
        <div className="noticias inicio__container">
            <div className="noticias__titulo">
                <h2>Noticias</h2>
            </div>

            <div className="noticias__container">
                <div className="noticias__1fila">
                    <div className="noticias__new">
                        <div className="noticias__new__img1" />
                        <div className="noticias__new__container">
                            <h3 className="noticias__new__titulo">Luis Muriel: Más fuera que dentro</h3>
                            <p className="noticias__new__p">El delantero de Atalanta, fue puesto en lista de transferibles por la directiva del club</p>
                        </div>
                    </div>

                    <div className="noticias__new">
                        <div className="noticias__new__img2" />
                        <div className="noticias__new__container">
                            <h3 className="noticias__new__titulo">Duván Zapata despierta rumores: conversaciones con director deportivo</h3>
                            <p className="noticias__new__p">El delantero colombiano fue visto con Paolo Maldini, director deportivo del Milan FC, almorzando en un restaurante de la ciudad. ¿Se marchara rumbo al club dirigido por Pioli?</p>
                        </div>
                    </div>
                    
                </div>

                <div className="noticias__new">
                    <div className="noticias__new__img3" />
                    <div className="noticias__new__container">
                        <h3 className="noticias__new__titulo">Merih Demiral: ¡Atalanta ejerce la opción de compra de más de 20Millones por Demiral!</h3>
                        <p className="noticias__new__p">La Dea ha ejercido la opción de compra del defensor turco, y ahora el club de Bergamo posee el pase del jugador al 100%</p>
                    </div>
                </div>
                <Link href="/noticias">
                    <div className="noticias__btn">
                        Ver todo
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Noticias;