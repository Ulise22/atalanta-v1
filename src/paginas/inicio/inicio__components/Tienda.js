import React, { useState } from "react";
import { TiendaData } from "./TiendaData";
import './Tienda.css';
import TiendaObjeto from "./TiendaObjeto";

const Tienda = ({objeto}) => {
    const [page, setPage] = useState(0);
    const length = objeto.length;

    const nextSlide = () => {
        setPage(page === length - 1 ? 0 : page + 1)
    }

    const prevSlide = () => {
        setPage(page === 0 ? length - 1 : page - 1)
    }

    if (!Array.isArray(objeto) || objeto.length <= 0) {
        return null;
    }

    return(
        <div className="tienda inicio__container">
            <div className="tienda__titulo">
                <h2>¡Visita Nuestra Tienda!</h2>
            </div>
            
            <div className="slider">
                <i class="fas fa-arrow-alt-circle-left fa-3x" onClick={prevSlide} />
                {
                    TiendaData.map((objeto, index) => {
                        return(
                            <div className={index === page ? 'slide active' : 'slide' } key={index}>
                                {index === page && ( <TiendaObjeto objeto={objeto} /> )}
                                
                            </div>
                        )
                    })
                }
                <i class="fas fa-arrow-alt-circle-right fa-3x" onClick={nextSlide} />
            </div>
            

        </div>
    )
}

export default Tienda;