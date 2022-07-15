import React from "react";
import './Videos.css';

const Videos = () => {
    return(
        <div className="videos inicio__container">
            <div className="videos__titulo">
                <h2>¡Nuestros Últimos Videos!</h2>
            </div>

            <div className="videos__container">

                    <a href="https://www.youtube.com/watch?v=1iyUZv0ler0&ab_channel=SerieA" target="_blank">
                        <div className="video video-1">
                            <div className="video__logo">
                                <i className="fas fa-play" />
                            </div>
                            <p className="video__titulo">Atalanta 5 - 0 Parma</p>
                            <span>Hace 2a 7m | 4m 13s</span>
                        </div>
                    </a>

                    <a href="https://www.youtube.com/watch?v=kumuTyFCM7c&ab_channel=SerieA" target="_blank">
                        <div className="video video-2">
                            <div className="video__logo">
                                <i className="fas fa-play" />
                            </div>
                            <p className="video__titulo">Resumen: Atalanta 1 - 1 Inter</p>
                            <span>Hace 1a 10m | 4m 13s</span>
                        </div>
                    </a>

                <a href="https://www.youtube.com/watch?v=ZcayQ8EACsw&ab_channel=SerieA" target="_blank">
                    <div className="video video-3">
                        <div className="video__logo">
                            <i className="fas fa-play" />
                        </div>
                        <p className="video__titulo">Resumen: Atalanta 4 - 2 Napoli</p>
                        <span>Hace 1a 5m | 4m 13s</span>
                    </div>
                </a>
            </div>

            <a href="https://www.youtube.com/atalanta" target="_blank">
                <div className="videos__btn">
                    <h3>¡Visita nuestro canal para ver más videos!</h3>
                </div>
            </a>
        </div>
    )
}

export default Videos;