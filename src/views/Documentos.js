import React from 'react';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import doc from '../img/doc.jpg';

function Documentos() {
    return (

        <div className="fondopantalla p-5">
            <h1 className="badge-warning h1-informacion p-1">¿Querés viajar? ¡Llevá los documentos!</h1>
            <Image className="img-card-informacion" src={doc} alt="Chico con la tablet en un bar" fluid />
            <Card className="card-informacion">
                <Card.Body>Algo importante a tener en cuenta, es la documentación que debemos llevar y los requerimientos para menores, también las exigencias según el destino elegido, sea nacional o internacional. Desde el 1º de diciembre de 2016 es obligatorio que todos los pasajeros acrediten su identidad mediante la documentación exigida y es responsabilidad del conductor del servicios solicitarla. Los pasajeros sin documentación o con discordancia en los datos no podrán subir a los servicios.
                </Card.Body>
                <Card.Body>Se destaca por su ambiente natural, su entorno familiar y su diseño urbanístico.5​ En cuanto a lo primero, posee amplias playas gracias a una serie de barreras costeras que impiden el avance del agua por sobre la costa, tal como ocurre en muchas otras ciudades costeras argentinas.
                </Card.Body>
                <Card.Body>En Argentina, el Documento Nacional de Identidad lo provee el Ministerio del Interior y tiene un formato plástico con elementos de seguridad distintivos y con tecnología que optimizó su calidad y seguridad. Los pasaportes se solicitan de forma digital y los envían al domicilio del solicitante
                </Card.Body>
            </Card>
        </div>
    );
}

export default Documentos;