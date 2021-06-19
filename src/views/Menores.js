import React from 'react';
import Card from 'react-bootstrap/Card';
import familia from '../img/familia.jpg';
import Image from 'react-bootstrap/Image'

function Menores() {
     return (
          <div className="fondopantalla p-5">
               <h1 className="badge-warning h1-informacion p-1">Traslado de MENORES</h1>
               <Image className="img-card-informacion" src={familia} alt="Familia unida abrazandose" fluid />
               <Card className="card-informacion">
                    <Card.Body>¡Hola! ¿Estás preparándote para viajar? Bueno, acordate que hace más de un año cambió la legislación sobre el traslado de menores de edad en transporte de larga distancia (Resolución 43 – E/2016 de la Secretaría de Gestión de Transporte, publicada el 19/08/2016). Acá hicimos un listado para ordenar la documentación necesaria, según edad. Leela con atención así preparás todo con tiempo:
                </Card.Body>
                    <h3 className="badge-warning p-2 text-center">Menores hasta 12 años de edad (inclusive)</h3>
                    <Card.Body>
                         <b>Deberán viajar SIEMPRE acompañados de:</b>
                         <ul className="autorizacion">
                              <li>Padre, madre o un (1) representante legal,</li>
                              <li>o persona autorizada.</li>
                         </ul>
                         <b>AUTORIZACIÓN: otorgada por al menos un (1) representante legal acreditando dicha representación mediante:</b>
                         <ol>
                              <li>
                                   DNI en el que conste nombre del representante legal,</li>
                              <li>Libreta de Matrimonio con el nacimiento del menor asentado, </li>
                              <li> Partida, Acta o Certificado de Nacimiento, </li>
                              <li> Certificado de Nacionalidad,</li>
                              <li>Testimonio Judicial de adopción o instrumento público que dé fe del vínculo.</li>
                         </ol>
                    </Card.Body>
                    <h3 className="badge-warning p-2 text-center">Menores de 13 a 17 años de edad (inclusive)</h3>
                    <Card.Body>
                         <b>Deberán viajar SIEMPRE acompañados de:</b>
                         <ul className="autorizacion">
                              <li> Padre, madre o un (1) representante legal,</li>
                              <li> Sin acompañante con autorización otorgada por al menos un (1) representante legal acreditando la representación mediante:</li>
                         </ul>
                         <ol>
                              <li> DNI en el que conste nombre del representante legal,</li>
                              <li>Libreta de Matrimonio con el nacimiento del menor asentado,</li>
                              <li>Partida, Acta o Certificado de Nacimiento,</li>
                              <li>Certificado de Nacionalidad,</li>
                              <li>Testimonio Judicial de adopción o instrumento público que dé fe del vínculo. </li>
                         </ol>
                    </Card.Body>
               </Card>
          </div>
     );
}

export default Menores;