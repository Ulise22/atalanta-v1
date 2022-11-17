import React from "react";
import './Historia.css'
import HistoriaHero from "./HistoriaHero";
import copa from './images/1963_Coppa_Italia.jpg';
import gasp from './images/gasperini.jpg';

const Historia = () => {
    return(
        <div>
            <HistoriaHero />

            <div className="historia__container">
                <div className="historia__text">
                    <div className="historia__primer">
                        <h1 className="historia__subtitulo">Los inicios</h1>
                        <p>La Atalanta tiene sus orígenes en la escisión de la Giovane Orobia, surgida en 1901. La primera sociedad futbolística de Bérgamo fue La Foot Ball Club Bérgamo, fundada por emigrantes suizos en 1903 y que participa en campeonatos regionales lombardos de la Federación Italiana de Fútbol hasta el año 1910.</p>
                        <p>Fue fundada el 17 de octubre de 1907 por los estudiantes Eugenio Urio, Giulio e Ferruccio Amati, Alessandro Forlini y Giovanni Roberti como Società Bergamo di Ginnastica e Sports Atletici Atalanta. El nombre se debe a la heroína griega Atalanta. La entidad ya tenía en 1907 una sección de fútbol, aunque fue reconocida por la federación correspondiente siete años más tarde, en 1914. Hasta ese momento, los bergamascos, que vestían de color blanquiazul, habían jugado solo un partido amistoso en la plaza d' Armi de Bérgamo y otro en el Campo de Marte, un terreno situado entre las calles Suardo y Fratelli Cairoli de la misma ciudad.</p>
                        <p>El primer campo homologado de Bérgamo estaba en la calle de Maglio del Lotto y tenía unas dimensiones de 90 metros de largo y 45 metros de ancho. Además tenía una grada con 1000 plazas. Estaba al lado de una línea de ferrocarril, lo que provocó que el día de la inauguración, en mayo de 1914, los viajeros de un tren proveniente de Milán vieran varias fases del partido.</p>
                        <p>La Atalanta Bergamo Calcio fue fundada el 17 de octubre de 1907. El 20 de febrero de 1920, se fusiona con otro club de la ciudad de Bérgamo llamado Bergamo. En el año 1937, debuta en la Serie A. Desde entonces se alternaron periodos de estabilidad en el fútbol de élite con fases de oscilación entre la Serie A y la Serie B. Los mejores puestos los logró en la temporada 2016-17, cuando terminó cuarto, y en la temporada 2018-19, tercero.</p>
                    </div>
                    <div>
                        <h1 className="historia__subtitulo">Los 100 primeros años</h1>
                        <p>En la temporada 62-63, más precisamente el 2 de junio de 1963, gana su primer y único título, la Copa de Italia 1962-63.</p>
                        <p>Para la temporada 2006-2007, el equipo logró el ascenso a la Serie A. En ese mismo 2007, el club cumplió 100 años.</p>
                        <p>En la temporada 2014-15 los malos resultados hacen que, en marzo de 2015, Edoardo Reja tome las riendas del equipo. En la última jornada el Atalanta pierde contra Milan por 1-3 y Cagliari Calcio le gana 4-3 a Udinese Calcio y esos resultados lo llevaron a Atalanta a jugar un desempate contra Cagliari Calcio por el último cupo del descenso a Segunda División. El 3 de junio de 2015, el Atalanta le gana 2-1 a Cagliari Calcio, con goles de Giulio Migliaccio y el gol agónico de Mauricio Pinilla y para Cagliari Calcio marca el empate parcial Albin Ekdal y logra quedarse una temporada más en Primera División.</p>
                        <img className="historia__image" src={copa} alt="Atalanta campeona" />
                    </div>
                    <div>
                        <h1 className="historia__subtitulo">La llegada de Gian Piero Gasperini</h1>
                        <p>La temporada 2016-17 sería una de las más históricas en los más de 100 años de existencia del Atalanta, alcanzando la clasificación directa (4º puesto) para la Liga Europa de la UEFA de la temporada 2017-2018, una gran proeza para un equipo modesto, superando y dejando atrás a equipos del calibre de la Associazione Calcio Firenze Fiorentina o la Associazione Calcio Milan, equipos asiduos a jugar en Europa.</p>
                        <p>La llegada del entrenador Gian Piero Gasperini fue vital para alcanzar dicho hito. Algunos de los detalles que hicieron que el Atalanta retornara a Europa tras 28 años haciendo una temporada espectacular fueron los siguientes:</p>
                        <p>- El proyecto de impulsar la cantera provocó la explosión de jóvenes canteranos de la Dea, destacando durante toda la temporada. Este gran papel ha catapultado al escaparate internacional a varios jugadores, como el lateral Andrea Conti o el del medio marfileño Franck Kessié, ambos traspasados a la Associazione Calcio Milan por precios elevados.</p>
                        <p>- Gasperson (como es conocido Gasperini) implantó en la mayoría de los partidos un 3-5-2, en donde rindieron a la perfección toda la plantilla para plantar cara a cualquiera. El 11 ideal que solía salir a los feudos italianos estaba compuesto por: Etrit Berisha bajo palos, Rafael Tolói, Mattia Caldara y Andrea Masiello hacían un muro infranqueable, Franck Kessié y el suizo Remo Freuler en la medular con los excelentes carrileros Andrea Conti y Leonardo Spinazzola, lo que le valió a este último a debutar con la selección absoluta italiana. La joya de la corona fue la dupla en ataque Andrea Petagna como delantero tanque y el capitán, el emblema bergamasco, Alejandro Darío Gómez, Papu Gómez, que, con el 10 a la espalda lideró a todo un equipo hacía el sueño europeo. La buena sintonía tanto dentro como fuera del campo ha sido crucial para alcanzar el éxito. Un ejemplo de ello son los numerosos jugadores que debutaron o se hicieron importantes en su selección. (Alejandro Darío Gómez con la selección argentina).</p>
                        <p>- La perseverancia en el proyecto, ya que el comienzo de temporada tampoco fue muy satisfactorio, pero a raíz de la victoria por 0-3 ante el Football Club Crotone a finales de septiembre de 2016 fue sin duda un punto de inflexión en el despegue del equipo hacia arriba, aferrándose a puestos europeos y sin desinflarse durante toda la temporada.</p>
                        <p>Con la llegada de la histórica temporada europea 2017/2018 del conjunto nerazurro, se cambia de patrocinador. La marca española Joma sucede a Nike tras varias temporadas vistiendo al equipo. Para paliar la marcha de jugadores importantes, el Atalanta no renuncia a su proyecto y llegan refuerzos jóvenes desde Italia o desde Bélgica, como es el caso del carrilero Timothy Castagne, procedente del KRC Genk, aunque también llegan fichajes contrastados y con caché como el del esloveno Josip Iličić, llegado de la Fiorentina. Pero la contratación más importante de esa temporada fue la del colombiano Duván Zapata, procedente de la Sampdoria a cambio de 14 millones de euros en préstamo por dos años, y 12 millones más si decide quedarse definitivamente con los servicios del jugador.</p>
                        <p>El 26 de mayo de 2019 concluye su mejor temporada de Serie A finalizando en la 3ª posición y obteniendo la histórica clasificación a la Liga de Campeones de la UEFA 2019-20 directamente a fase de grupos con 69 puntos producto de 20 victorias, 9 empates y 9 derrotas.</p>
                        <p>En la temporada 2019-20, lograron el tercer puesto en la Serie A por 2º vez consecutiva, al perder contra el Inter 0-2 en la última jornada.​</p>
                        <p>En la Liga de Campeones de la UEFA 2019-20, eliminaron al Valencia Club de Fútbol en octavos de final por un global de 8-4. En cuartos de final, les tocó enfrentarse al equipo francés París Saint-Germain Football Club a partido único en el Estádio da Luz, donde perdieron por 2-1 en los últimos minutos.​</p>
                        <img className="historia__image" src={gasp} alt="Gasperini" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Historia;