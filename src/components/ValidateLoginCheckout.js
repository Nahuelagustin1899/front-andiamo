import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";


const ValidateLoginCheckout = (props) => {

  const history = useHistory();

  return <Formik
    initialValues={{
      nombre: "",
      email: "",
      dni: "",
      tipo: "",
      expiracion: "",
      numTarj: "",
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
        .min(8, "El campo debe contener al menos 8 digitos"),
      numTarj: Yup.number()
        .required("El campo número de tarjeta no puede estar vacío")
        .min(16, "El campo debe contener al menos 16 digitos"),
      expiracion: Yup.date()
        .required("El campo fecha de expiración no puede estar vacío"),
    })}
  >

    {props => {
      const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
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
            </div>

            <div className="col-md-12 mb-3">
              <label htmlFor="dni">Tipo de tarjeta</label>
              <select className="form-control" >
                <option selected disabled>Elegi tu tarjeta</option>
                <option value="mastercard">Mastercard</option>
                <option value="visa">Visa</option>
                <option value="santander">Santander Río</option>
              </select>
            </div>


            <div className="col-md-12 mb-3">
              <label htmlFor="numTarj">Número de tarjeta</label>
              <input
                name="numTarj"
                type="text"
                maxlength="16"
                placeholder="Número de tarjeta"
                value={values.numTarj}
                onChange={handleChange}
                onBlur={handleBlur}
                className='form-control'

              />
              {errors.numTarj && touched.numTarj && (
                <div className="alert alert-danger mt-1">{errors.numTarj}</div>
              )}
            </div>


            <div className="col-md-12 mb-3">
              <label htmlFor="expiracion">Fecha</label>
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