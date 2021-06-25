import React from 'react';
import miramar from '../img/miramar.jpg';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
function Miramar() {



    return (
        <div className="fondopantalla p-5">
            <h1 className="badge-warning h1-informacion">Miramar</h1>
            <Image className="img-card-informacion" src={miramar} alt="Estatua de la M de minamar" fluid />
            <Card className="card-informacion">
                <Card.Body>Miramar es una ciudad costera argentina situada en el sudeste de la provincia de Buenos Aires. Es la cabecera del partido de General Alvarado y un importante <b className="text-info">centro turístico</b>. Se encuentra a 48 km de Mar del Plata y a 448 km de la ciudad de Buenos Aires.
                </Card.Body>
                <Card.Body>Se destaca por su <b className="text-info">ambiente natural, su entorno familiar y su diseño urbanístico</b>.5​ En cuanto a lo primero, posee amplias playas gracias a una serie de barreras costeras que impiden el avance del agua por sobre la costa, tal como ocurre en muchas otras ciudades costeras argentinas.
                </Card.Body>
                <Card.Body>Además la ciudad ofrece diferentes alternativas <b className="text-info">culturales, museos, teatros y fiestas populares, y ofertas educativas</b> en todos los niveles de la enseñanza, como así también medios de comunicación que mantienen a los pobladores y turistas informados. 
                </Card.Body>
            </Card>
        </div>
    );
}

export default Miramar;