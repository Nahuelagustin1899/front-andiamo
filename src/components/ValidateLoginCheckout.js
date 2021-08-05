import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import master from '../img/master.svg';
import visa from '../img/visa.svg';
import american from '../img/american.svg';
import cabal from '../img/cabal.svg';

const ValidateLoginCheckout = (props) => {

  const history = useHistory();
  const [msjTarjeta, setMsjTarjeta] = useState('');
  const handleChangeCard = (e, setFieldValue) => {


    setFieldValue('numTarj', e.target.value)
    console.log(e.target.value)


    switch (Number(e.target.value)) {
      case 3:
        setMsjTarjeta(<img width="80" height="80" src={american} alt="tarjeta american express" />)
        break;
      case 4:
        setMsjTarjeta(<img width="80" height="80" src={visa} alt="tarjeta visa" />)
        break;
      case 5:
        setMsjTarjeta(<img width="80" height="80" src={master} alt="tarjeta mastercard" />)
        break;
      case 6:
        setMsjTarjeta(<img width="80" height="80" src={cabal} alt="tarjeta cabal" />)
        break;
      default:
        break;
    }

  }
  return <Formik
    initialValues={{
      nombre: "",
      email: "",
      dni: "",
      tipo: "",
      expiracion: "",
      numTarj: "",
      codigo: "",
    }}

    onSubmit={(values, { setSubmitting }) => {

      history.push("/reservaexitosa");
      setTimeout(() => {

        console.log("Formulario enviado con éxito", values);
        setSubmitting(false);

      }, 500);

    }}


    validationSchema={Yup.object().shape({
      nombre: Yup.string()
        .required("El campo nombre no puede estar vacío"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El campo email no puede estar vacío"),
      dni: Yup.number()
        .required("El campo DNI no puede estar vacío")
        .min(8, "El campo debe contener 8 dígitos"),
      codigo: Yup.number()
        .required("El campo còdigo no puede estar vacío")
        .min(3, "El campo debe contener 3 dígitos"),
      numTarj: Yup.number()
        .required("El campo número de tarjeta no puede estar vacío")
        .min(16, "El campo debe contener 16 dígitos"),
      expiracion: Yup.date()
        .required("El campo fecha de expiración no puede estar vacío")
        .min(new Date(2021, 7), "No puede elegir fechas pasadas"),
    })}
  >

    {props => {
      const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue
      } = props;



      return (

        <form onSubmit={handleSubmit}>
          <div className="row global">
            <div className="col-md-12 mb-3">
              <label htmlFor="nombre">Nombre</label>
              <input
                name="nombre"
                type="text"
                placeholder="Nombre del titular de la tarjeta"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"

              />
              {errors.nombre && touched.nombre && (
                <div className="alert alert-danger mt-1">{errors.nombre}</div>
              )}
            </div>

            <div className="col-md-12 mb-3">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className='form-control'

              />
              {errors.email && touched.email && (
                <div className="alert alert-danger mt-1">{errors.email}</div>
              )}
            </div>

            <div className="col-md-12 mb-3">
              <label htmlFor="dni">Dni</label>
              <input
                name="dni"
                type="text"
                placeholder="Dni del titular de la tarjeta"
                maxlength="8"
                value={values.dni}
                onChange={handleChange}
                onBlur={handleBlur}
                className='form-control'

              />
              {errors.dni && touched.dni && (
                <div className="alert alert-danger mt-1">{errors.dni}</div>
              )}
            </div>

            <div className="col-md-12 mb-3">
              <label htmlFor="numTarj">Número de tarjeta</label>
              <input
                name="numTarj"
                type="text"
                maxlength="16"
                placeholder="Número de tarjeta"
                value={values.numTarj}
                onChange={(e) => handleChangeCard(e, setFieldValue)}
                onBlur={handleBlur}
                className='form-control'

              />
              {errors.numTarj && touched.numTarj && (
                <div className="alert alert-danger mt-1">{errors.numTarj}</div>
              )}
              {
                msjTarjeta && (
                  <div className="mt-1">{msjTarjeta}</div>
                )
              }
            </div>

            <div className="col-md-12 mb-3">
              <label htmlFor="codigo">Codigo de seguridad</label>
              <input
                name="codigo"
                type="text"
                placeholder="Codigo de la tarjeta"
                maxlength="3"
                value={values.codigo}
                onChange={handleChange}
                onBlur={handleBlur}
                className='form-control'

              />
              {errors.codigo && touched.codigo && (
                <div className="alert alert-danger mt-1">{errors.codigo}</div>
              )}
            </div>


            <div className="col-md-12 mb-3">
              <label htmlFor="expiracion">Fecha de vencimiento</label>
              <input
                name="expiracion"
                type="month"
                placeholder="Fecha de vencimiento"
                value={values.expiracion}
                onChange={handleChange}
                onBlur={handleBlur}
                className='form-control'

              />
              {errors.expiracion && touched.expiracion && (
                <div className="alert alert-danger mt-1">{errors.expiracion}</div>
              )}
            </div>

          </div>
          <Link onClick={handleSubmit} className="btn btn-primary btn-lg btn-block mb-5 mt-5" type="submit">Finalizar reserva</Link>


        </form>
      );
    }}
  </Formik>




};

export default ValidateLoginCheckout;