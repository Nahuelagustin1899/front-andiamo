import React, { useState, useEffect } from 'react';
import empresasService from "../services/empresas";
import Cargando from "../components/Cargando";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@material-ui/icons/Delete.js';
import AddIcon from '@material-ui/icons/Add.js';
import { makeStyles } from "@material-ui/core/styles";
import Fab from '@material-ui/core/Fab';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EditIcon from '@material-ui/icons/Edit.js';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(4)
    },
    extendedIcon: {
        marginRight: theme.spacing(1)
    }
}));

function Empresas(props) {
    const urlbase = "https://andiamo-back.herokuapp.com/imgs/empresas/logos/";
    const [empresas, setEmpresas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [empresaEliminar, setEmpresaEliminar] = useState();
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setEmpresaEliminar(null)
        setShow(false);

    }
    const handleShow = () => setShow(true);
    const history = useHistory();

    const editarEmpresa = (item) => {
        history.push({ pathname: "/editarempresa", state: { item: item } })
    }

    useEffect(() => {
        (async () => {
            const data = await empresasService.index();
            setEmpresas(data);
            setCargando(false);
        })().catch(err => console.error('Error al traer las empresas: ', err));
    }, []);

    const lista = empresas.map(item => (
        <div key={item.id}>
            <Table variant="warning" striped bordered hover>
                <thead>
                    <tr className="row">
                        <th className="col-4 text-center colorth radius-top-izq">Nombre</th>
                        <th className="col-4 text-center colorth">Logo</th>
                        <th className="col-4 text-center colorth radius-top-der">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="row">
                        <td className="col-4 text-center colortd font-weight-bold radius-bottom-izq">{item.nombre}</td>
                        <td className="col-4 text-center colortd font-weight-bold"><img className="img-empresa" src={urlbase + item.logo} alt={item.id} /></td>
                        <td className="col-4 text-center colortd radius-bottom-der">


                            <Fab id="icon-elim" color="secondary"onClick={() => {
                                setEmpresaEliminar(item)
                                handleShow()
                            }} aria-label="delete">
                                <DeleteIcon />
                            </Fab>

                            <Fab id="botones1" onClick={() => editarEmpresa(item)} color="primary" aria-label="edit">
                                <EditIcon />
                            </Fab>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <b> {empresaEliminar?.nombre ?? ''} </b>
                </Modal.Header>
                <Modal.Body>??Est??s seguro que deseas eliminar esta empresa?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <button className="btn btn-secondary">
                            Cerrar
                        </button>
                    </Button>
                    <Button onClick={handleClose}>
                        <button className="btn btn-primary" onClick={() => {
                            empresasService.delete(empresaEliminar.id)
                                .then(data => {
                                    setEmpresas(empresas.filter(empresa => empresa.id !== empresaEliminar.id));
                                    if (typeof props.notExitosaEliminar === 'function') {
                                        props.notExitosaEliminar(data);
                                    }
                                    history.push('/empresaspanel');
                                })
                                .catch(err => {
                                    if (typeof props.notDenegadaEliminar === 'function') {
                                        props.notDenegadaEliminar(empresaEliminar);
                                    }
                                });
                        }}>Eliminar</button>
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    ));

    return (<div className="fondopantalla p-1">
        <h1 className="mb-5 text-center viajes">Empresas</h1>


        <Link to="/empresas/nueva">
            <Fab variant="extended"
                size="medium"
                color="primary"
                aria-label="add"
                className={classes.margin}>
                <AddIcon className={classes.extendedIcon} />
                Crear empresa
            </Fab>
        </Link>

        {cargando ?
            <Cargando /> :
            (<ul className="crear-empresas">
                {lista}
            </ul>)}
    </div>);
}

export default Empresas;
