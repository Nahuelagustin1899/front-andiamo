import React, { useState, useEffect } from 'react';
import viajesService from "./../services/viajes";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { format } from 'date-fns';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit.js';
import DeleteIcon from '@material-ui/icons/Delete.js';
import AddIcon from '@material-ui/icons/Add.js';
import { makeStyles } from "@material-ui/core/styles";
import { FaMoneyBillAlt } from "react-icons/fa";
import { SiGooglecalendar } from "react-icons/si";
import TextField from '@material-ui/core/TextField';
import Cargando from "../components/Cargando";

const useStyles = makeStyles((theme) => ({
    margin: {
        marginBottom: theme.spacing(3)
    },
    extendedIcon: {
        marginRight: theme.spacing(1)
    }
}));

function Viajes(props) {
    const history = useHistory();
    const [viajesAux, setViajesAux] = useState([]);
    const [precio, setPrecio] = useState("");
    const [salida, setSalida] = useState("");
    const [viajes, setViajes] = useState([]);
    const [viajeEliminar, setViajeEliminar] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setViajeEliminar(null)
        setShow(false);

    }
    const handleShow = () => setShow(true);
    const classes = useStyles();
    const [cargando, setCargando] = useState(true);

    const editarViaje = (item) => {
        history.push({ pathname: "/editarviaje", state: { item: item } })
    }

    useEffect(() => {
        (async () => {
            const data = await viajesService.indexEmpresa();
            setViajes(data);
            setViajesAux(data);
            setCargando(false);
        })().catch(err => console.log("Error al traer los viajes: ", err));
    }, []);

    const filtro = () => {

        const newData = viajes.filter((item) => {
            const itemPrecio = item.precio;
            const itemSalida = item.fecha_salida;
            return itemPrecio.indexOf(precio) > -1 && itemSalida.indexOf(salida) > -1;
        });

        console.log(newData);
        setViajes(newData);
    }

    const clear = () => {
        setPrecio('');
        setSalida('');
        setViajes(viajesAux);
    }


    const lista = viajes.map(item => (
        <div key={item.id}>
            <Table variant="warning" striped bordered hover   >
                <thead>
                    <tr className="row">
                        <th className="col-4 text-center colorth radius-top-izq">Salida</th>
                        <th className="col-4 text-center colorth">Llegada</th>
                        <th className="col-4 text-center colorth radius-top-der">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="row">
                        <td className="col-4 text-center colortd radius-bottom-izq">{item.salida.nombre}</td>
                        <td className="col-4 text-center colortd">{item.destino.nombre}</td>
                        <td className="col-4 text-center colortd radius-bottom-der">$ {item.precio}</td>
                    </tr>
                </tbody>
            </Table>

            <Table variant="warning" striped bordered hover >
                <thead>
                    <tr className="row">
                        <th className="col-4 text-center colorth radius-top-izq">Empresa</th>
                        <th className="col-4 text-center colorth">Fecha salida</th>
                        <th className="col-4 text-center colorth radius-top-der">Fecha llegada</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="row">
                        <td className="col-4 text-center colortd radius-bottom-izq">{item.empresa.nombre}</td>
                        <td className="col-4 text-center colortd">{format(new Date
                            (item.fecha_salida), 'dd-MM-yyyy hh:mm:ss a')}</td>
                        <td className="col-4 text-center colortd radius-bottom-der">{format(new Date
                            (item.fecha_llegada), 'dd-MM-yyyy hh:mm:ss a')}</td>

                    </tr>
                </tbody>
            </Table>
            <div>
                <Fab id="botones" color="secondary" onClick={() => {
                    setViajeEliminar(item)
                    handleShow()
                }} aria-label="delete">
                    <DeleteIcon />
                </Fab>

                <Fab id="botones1" onClick={() => editarViaje(item)} color="primary" aria-label="edit">
                    <EditIcon />
                </Fab>

            </div>
            <hr className="hr" />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton><b>De:
                {" " + viajeEliminar?.salida.nombre ?? ''} a {viajeEliminar?.destino.nombre ?? ''}</b>
                </Modal.Header>
                <Modal.Body>??Est??s seguro que deseas eliminar este viaje?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <button className="btn btn-secondary">
                            Cerrar
                        </button>
                    </Button>
                    <Button onClick={handleClose}>
                        <button className="btn btn-primary"
                            onClick={() => {
                                viajesService.delete(viajeEliminar.id)
                                    .then(data => {
                                        setViajes(viajes.filter(viaje => viaje.id !== viajeEliminar.id));
                                        if (typeof props.notExitosaEliminar === 'function') {
                                            props.notExitosaEliminar(data);

                                        }
                                        history.push('/viajes');
                                    })

                                    .catch(err => {
                                        if (typeof props.notDenegadaEliminar === 'function') {
                                            props.notDenegadaEliminar(viajeEliminar);
                                        }
                                    });
                            }}>Eliminar</button>
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    ))

    return (
        <div className="fondopantalla" >
            <h1 className="mb-5 viajes-empresa">Panel de viajes</h1>
            <div>

                <div className="filtros">
                    <div className="form-group ">
                        <label className="d-block " htmlFor="date">Fecha salida <SiGooglecalendar className="ml-2" style={{ fontSize: 23 }} /></label>
                        <TextField
                            className="form-control inputs-filtros"
                            type="date"
                            value={salida}
                            onChange={(e) => setSalida(e.target.value)}
                        />
                        <button className="btn btn-success d-inline-block w-25 btn-fecha" onClick={filtro}>Buscar</button>
                    </div>

                    <div className="form-group ">
                        <label className="d-block" htmlFor="empresa">Precio <FaMoneyBillAlt className="ml-2" style={{ fontSize: 25 }} /></label>
                        <input
                            className="form-control inputs-filtros"
                            type="text"
                            value={precio}
                            placeholder="Buscar por precio"
                            onChange={(e) => setPrecio(e.target.value)}
                        />
                        <button className="btn btn-success d-inline-block w-25" onClick={filtro}>Buscar</button>
                    </div>


                    <button className="btn btn-primary limpiar-filtro" onClick={clear}>Limpiar</button>
                </div>
                <div className="p-4">
                    <Link to="/viajes/nueva">
                        <Fab variant="extended"
                            size="medium"
                            color="primary"
                            aria-label="add"
                            className={classes.margin}>
                            <AddIcon className={classes.extendedIcon} />
                            Crear viaje
                        </Fab>
                    </Link>
                        { cargando ?
                            <Cargando /> :
                            lista 
                        }
                    
                </div>
            </div>
        </div>
    )
}

export default Viajes;