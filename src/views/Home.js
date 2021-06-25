import React, { useState } from 'react';
import playa2 from '../img/playa2.jpg';
import playa1 from '../img/playa1.jpg';
import playa3 from '../img/playa3.jpg';
import clemente from '../img/clemente.jpg';
import clemente2 from '../img/clemente2.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";

function Home() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (<div className="fondopantalla p-5">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={playa2}
          alt="Playa de Mar de Ajó"
        />
        <Carousel.Caption>
          <h4 className="badge badge-warning">Mar de Ajó</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={playa1}
          alt="Playa Mar Del Plata"
        />
        <Carousel.Caption>
          <h4 className="badge badge-warning">Mar del Plata</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={playa3}
          alt="Playa las Toninas"
        />
        <Carousel.Caption>
          <h4 className="badge badge-warning">Las Toninas</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Card className="card-home mb-5 mt-5" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={playa3} className="imgs" />
      <Card.Body>
        <Card.Title className="text-center font-weight-bold">Santa Teresita</Card.Title>
        <Card.Text>
          Santa Teresita es una ciudad turística argentina, en el partido de La Costa, provincia de Buenos Aires. La localidad ha nacido y crecido con un fin turístico ...
        <NavLink type="button" className="nav-link " to="/santateresita">Ver más..</NavLink>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="card-home mb-5 mt-5" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={clemente2} className="imgs" />
      <Card.Body>
        <Card.Title className="text-center font-weight-bold">Miramar</Card.Title>
        <Card.Text>
          Miramar es una ciudad costera argentina situada en el sudeste de la provincia de Buenos Aires. Es la cabecera del partido de General Alvarado...
        <NavLink type="button" className="nav-link" to="/miramar">Ver más..</NavLink>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="card-home mb-5 mt-5" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={clemente} className="imgs" />
      <Card.Body>
        <Card.Title className="text-center font-weight-bold">San bernardo</Card.Title>
        <Card.Text>
          San Bernardo del Tuyú, mas conocida como San Bernardo, es una ciudad balnearia y turística argentina en el partido de La Costa...
        <NavLink type="button" className="nav-link " to="/sanber">Ver más..</NavLink>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  );
}

export default Home;