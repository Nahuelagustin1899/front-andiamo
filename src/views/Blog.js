import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import familia from '../img/familia.jpg';
import doc from '../img/doc.jpg';
import terminal from '../img/terminal.jpg';
import { NavLink } from "react-router-dom";

function Blog() {


    return (<div className="fondopantalla">

   < h1 className="mt-3 mb-5 text-weigth-bold text-center blog">Datos útiles</h1>

<div className="containter">   
  <CardColumns className="ml-4 mr-4">
    <Card className=" blogs">
      <Card.Img  className="home" variant="top" src={familia} alt="Familia"/>
      <Card.Body>
        <Card.Title><b>Traslado de MENORES en transportes de Larga Distancia</b></Card.Title>
        <Card.Text>

          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">2020/10/01</small>
      </Card.Footer>
    </Card>
    <Card className=" blogs">
      <Card.Img  className="home" variant="top" src={doc} alt="Documentos" />
      <Card.Body>
        <Card.Title><b>¿Querés viajar? ¡Llevá los documentos!</b></Card.Title>
        <Card.Text>
        Vacaciones, feriados, fines de semana largo son momentos ideales para viajar, descansar y disfrutar. ¡Miles de destinos por delante y tantas cosas para hacer! Es cierto que antes de cumplir con la premisa de relajarnos en otro lugar y contexto la previa se hace cuesta arriba y los preparativos nos dejan exhaustos, por eso está bueno ponerse las pilas y ser organizados ...
          <NavLink type="button" className="nav-link "  to="/documentos" disabled="true" >Ver más</NavLink>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">2020/10/01</small>
      </Card.Footer>
    </Card>
    <Card className="blogs">
      <Card.Img  className="home" variant="top" src={terminal} alt="Terminal" />
      <Card.Body>
        <Card.Title><b>Terminales de micro en todo el país</b></Card.Title>
        <Card.Text>
        Cuando llega la hora de viajar siempre es emocionante y a la vez estresante. No importa el motivo de tu viaje es lindo distraerte y pensar en otra cosa, respirar otro aire, observar desde otra perspectiva ...
          <NavLink type="button" className="nav-link "  to="/documentos">Ver más</NavLink>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">2020/10/01</small>
      </Card.Footer>
    </Card>
  </CardColumns>

</div>

</div>);
}

export default Blog;