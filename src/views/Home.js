import React, {useState} from 'react';
import playa2 from '../img/playa2.jpg';
import playa1 from '../img/playa1.jpg';
import playa3 from '../img/playa3.jpg';
import barco from '../img/barco.jpg';
import clemente from '../img/clemente.jpg';
import clemente2 from '../img/clemente2.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function Home() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

return (<div className="fondopantalla">

        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={playa2}
                alt="Playa 2"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={playa1}
                alt="Playa 1"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={playa3}
                alt="Playa 3"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    
    <Card className="holaaa mb-5 mt-5" style={{ width: '18rem'}}>
      <Card.Img variant="top" src={playa3} className="imgs" />
      <Card.Body>
        <Card.Title>Nuevos tramos habilitados</Card.Title>
        <Card.Text>
        Solo podrán abordar quienes realicen tareas contempladas en las excepciones establecidas por DNU Nacional relacionado a COVID-19. Es obligatorio tener el certificado, quienes no justifiquen esas funciones, no podrán efectuar el viaje ni reclamar reintegro alguno. 
        </Card.Text>
        {/* <Button variant="primary">Ver más</Button> */}
      </Card.Body>
    </Card>
    
    <Card className="holaaa mb-5 mt-5" style={{ width: '18rem'}}>
      <Card.Img variant="top" src={clemente2} className="imgs"/>
      <Card.Body>
        <Card.Title>Lugares para disfrutar</Card.Title>
        <Card.Text>
        Un clásico de los fines de semana largo es la Costa Atlántica y un imperdible es la visita a la ciudad balnearia de Mar del Plata. Si bien el principal atractivo de La Feliz son sus playas, en otoño podemos hacer otros recorridos por esta hermosa ciudad, como un City Tour para conocer los puntos de interés. 
        </Card.Text>
       {/*  <Button variant="primary">Ver más</Button> */}
      </Card.Body>
    </Card>
    
    <Card className="holaaa mb-5 mt-5" style={{ width: '18rem'}}>
      <Card.Img variant="top" src={clemente} className="imgs"/>
      <Card.Body>
        <Card.Title>Valle de Punilla</Card.Title>
        <Card.Text>
        El Valle cuenta con varias localidades como La Cumbre, Capilla del Monte, San Marcos Sierra, entre otras a las que llegan varios servicios. Allí se pueden realizar cabalgatas, exploraciones, paseos en tren, todo para recargarse de la energía de las sierras.Todos estos circuitos se pueden realizar desde Villa Carlos Paz
        </Card.Text>
       {/*  <Button variant="primary">Ver mas</Button> */}
      </Card.Body>
    </Card>
    </div>  
    );
}

export default Home;