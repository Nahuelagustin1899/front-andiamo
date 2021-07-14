import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function ReservaExitosa() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }));



    const classes = useStyles();
    return (
        <div className="fondopantalla p-4">
            <div className={classes.root}>
                <Alert variant="filled" severity="success">
                    <AlertTitle>Éxito</AlertTitle>
                    <strong>La reserva fue realizada exitosamente</strong>
                </Alert>
                <div className="box-stars mb-5 mt-5">
                    <h3 className="text-center text-white h4">Por último, nos va a servir para mejorar la app : </h3>
                    <Box className="mt-5" component="fieldset" mb={3} borderColor="transparent">
                        <Typography className="font-weight-bold text-center text-white" component="legend">¿Qué tan satisfecho estuviste con la app?</Typography>
                        <Rating className="estrellas" size="large" name="size-large" defaultValue={2} max={5} />
                    </Box>
                </div>
                <>
                    <Link className="btn btn-danger link-stars" to="/">
                        No calificar
                    </Link>
                    <Button className="link-stars2" variant="primary" onClick={handleShow}>
                        Calificar
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="text-success h5 text-weight-bold">¡La calificación fue exitosa!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="text-weight-bold">¡Muchas gracias, Andiamo!</Modal.Body>
                        <Modal.Footer>
                            <a type="button" className="btn btn-primary" href="/">
                                Terminar
                            </a>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
        </div >
    );
}

export default ReservaExitosa;
