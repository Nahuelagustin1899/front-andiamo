import React from 'react';
import teresita from '../img/teresita.jpg';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import KeyboardReturnSharpIcon from '@material-ui/icons/KeyboardReturnSharp';

function SantaTeresita() {

    return (
        <div className="fondopantalla p-5">
            <a className="btn btn-primary mb-4 btn-volver" href="/"><KeyboardReturnSharpIcon/></a>
            <h1 className="badge-warning h1-informacion">Santa Teresita</h1>
            <Image className="img-card-informacion" src={teresita} alt="Barco Santa Teresita" fluid />
            <Card className="card-informacion">
                <Card.Body>Santa Teresita es una ciudad turística argentina, en el partido de La Costa, provincia de Buenos Aires. La localidad ha nacido y crecido con un fin turístico entorno al <b className="text-info">clima templado oceánico y a sus playas</b>. Limita al norte con Costa Chica, al sur con Mar del Tuyú, al oeste con la RP 11, y al este con la costa del mar Argentino, en el Océano Atlántico.</Card.Body>
                <Card.Body>Fue fundada el 3 de marzo de 1946 por el abogado Y contador Lázaro Freidenberg. Se puede considerar que la característica más identificatoria de la ciudad es su <b className="text-info">costanera arbolada con pasarelas de madera</b>, entre la Avenida Costanera y la playa propiamente dicha. </Card.Body>
                <Card.Body>En esta ciudad se puede disfrutar del mar, la arena, practicar deportes como el kitesurf o el surf, pasear por sus espacios verdes o sus calles arboladas, realizar compras en el centro, o disfrutar de la gastronomía local.</Card.Body>
            </Card>
        </div>
    );
}

export default SantaTeresita;