import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import familia from '../img/familia.jpg';
import doc from '../img/doc.jpg';
import terminal from '../img/terminal.jpg';
import { NavLink } from "react-router-dom";

function Blog() {

  return (
    <div className="fondopantalla p-5">
      <h1 className="mt-3 mb-5 text-center h1-blog">Datos útiles</h1>
      
        <CardColumns className="card-columns">
          <Card>
            <Card.Img variant="top" src={familia} alt="Familia" />
            <Card.Body>
              <Card.Title><b>Traslado de MENORES en transportes de Larga Distancia</b></Card.Title>
              <Card.Text>
              ¡Hola! ¿Estás preparándote para viajar? Bueno, acordate que hace más de un año cambió la legislación sobre el traslado de menores de edad en transporte de larga distancia (Resolución 43 – E/2016 de la Secretaría... 
              <NavLink type="button" className="nav-link " to="/menores" disabled="true" >Ver más</NavLink>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">2020/10/01</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={doc} alt="Documentos" />
            <Card.Body>
              <Card.Title><b>¿Querés viajar? ¡Llevá los documentos!</b></Card.Title>
              <Card.Text>
                Vacaciones, feriados, fines de semana largo son momentos ideales para viajar, descansar y disfrutar. ¡Miles de destinos por delante y tantas cosas para hacer! Es cierto que antes de cumplir con la premisa  ...
          <NavLink type="button" className="nav-link " to="/documentos" disabled="true" >Ver más</NavLink>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">2020/10/01</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={terminal} alt="Terminal" />
            <Card.Body>
              <Card.Title><b>Terminales de micro en todas las provincias</b></Card.Title>
              <Card.Text>
                Cuando llega la hora de viajar siempre es emocionante y a la vez estresante. No importa el motivo de tu viaje es lindo distraerte y pensar en otra cosa, respirar otro aire, observar desde otra perspectiva ...
          <NavLink type="button" className="nav-link " to="/terminales">Ver más</NavLink>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">2020/10/01</small>
            </Card.Footer>
          </Card>
        </CardColumns>

      </div>
   );
}

export default Blog;