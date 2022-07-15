import React from "react";

const TiendaObjeto = ({objeto}) => {
    return(
        <div className="slide__padre">
            <h2> {objeto.nombre} </h2>
            <img src={objeto.imagen} alt="Camiseta Atalanta" className="imagen" />
            <div className="slider__container">
                <h3> {objeto.precio} </h3>
                <button className="slider__btn">Comprar</button>
            </div>
        </div>
    )
}

export default TiendaObjeto;