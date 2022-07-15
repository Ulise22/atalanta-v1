import React from "react";
import Hero from "./inicio__components/Hero";
import Noticias from "./inicio__components/Noticias";
import './Inicio.css';
import Videos from "./inicio__components/Videos";
import Tienda from "./inicio__components/Tienda";
import { TiendaData } from "./inicio__components/TiendaData";

const Inicio = () => {
    return(
        <div>
            <Hero />
            <Noticias />
            <Tienda objeto={TiendaData} />
            <Videos />
        </div>
    )
}

export default Inicio;