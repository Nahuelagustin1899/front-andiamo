import React from 'react';
import sanber from '../img/sanber.jpg';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

function SanBernardo() {

    return (
        <div className="fondopantalla p-5">
            <h1 className="badge-warning h1-informacion">San Bernardo</h1>
            <Image className="img-card-informacion" src={sanber} alt="La costa San Bernardo" fluid />
            <Card className="card-informacion">
                <Card.Body>San Bernardo del Tuyú, mas conocida como San Bernardo, es una ciudad balnearia y turística argentina en el partido de La Costa, provincia de Buenos Aires. Sus playas <b className="text-info">son bañadas por el mar Argentino</b>, en el accidente conocido como cabo San Antonio.
            </Card.Body>
                <Card.Body>San Bernardo es también mencionada como "La Perla de La Costa" <b className="text-info">por ser el centro urbano con mayor movimiento comercial turístico del partido y por la belleza de la ciudad.</b>
            </Card.Body>
                <Card.Body><b className="text-info">Las playas de San Bernardo</b> presentan los días de viento norte aguas templadas (16 °C) y pardas, mientras que son más frías (13 °C) pero de color azul cuando ocurren las sudestadas. La temperatura máxima promedio en verano es de 26 °C, con máximas de 33. En invierno se transforma en una ciudad muy tranquila donde la temperaturas bajan considerablemente.
            </Card.Body>
            </Card>
        </div>
    );
}

export default SanBernardo;