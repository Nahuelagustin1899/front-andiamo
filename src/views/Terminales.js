import React from 'react';
import Card from 'react-bootstrap/Card';
import terminal from '../img/terminal.jpg';
import Image from 'react-bootstrap/Image'

function Terminales() {
    return (
        <div className="fondopantalla p-5">
            <h1 className="badge-warning h1-informacion p-1 h4">Terminales</h1>
            <Image className="img-card-informacion" src={terminal} alt="Hombre sonriendo al lado de micro blanco" fluid />
            <Card className="card-informacion">
                <Card.Body><b className="text-info">Si estás en Buenos Aires</b> no sólo no tenés que ir hasta la terminal de Retiro a comprarte tus pasajes sino que lo podés tomar desde cualquier lado del conurbano.
                </Card.Body>
                <Card.Body>
                    Por ejemplo, si vas a la costa, la empresa Rutatlántica, no sale de Retiro pero sí de la terminal de Liniers. Además sale desde otros puntos como Villa Ballester, San Miguel, Jose C. Paz, Don Torcuato, Pilar, Del Viso, Caseros, Ituzaingó, San Justo, Tapiales, San Martín, Morón, Florencio Varela, Caseros, San Isidro.
                </Card.Body>
                <Card.Body>Con la empresa Plusmar, tenés otros puntos de ascenso y descenso, como pueden ser: Avellaneda, Sarandi, Quilmes, Wilde, Bernal, Berazategui, Banfield, Lomas de Zamora, Olivos.
                </Card.Body>
            </Card>
        </div>
    );
}

export default Terminales;
