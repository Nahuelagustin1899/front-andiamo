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
      apellido: "",
      email: "",
      dni: "",
      provincia: "",
      expiracion: "",
      numTarj: "",
      codigo: ""
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
      apellido: Yup.string()
        .required("El campo apellido no puede estar vacío"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El campo email no puede estar vacío"),
      dni: Yup.number()
        .required("El campo DNI no puede estar vacío")
        .min(8,'No podes poner menos de 8 números')
        .max(8,'No podes poner más de 8 números'),
      numTarj: Yup.number()
        .required("El campo número de tarjeta no puede estar vacío")
        .min(8,'No podes poner menos de 16 números')
        .max(8,'No podes poner más de 16 números'),
      expiracion: Yup.date()
        .required("El campo fecha de expiración no puede estar vacío"),
      codigo: Yup.number()
        .required("El campo fecha de expiración no puede estar vacío")
        .min(3,'No podes poner menos de 16 números')
        .max(3,'No podes poner más de 16 números'),
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
                placeholder="Nahuel"
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
              <label htmlFor="apellido">Apellido</label>
              <input
                name="apellido"
                type="text"
                placeholder="Lopez"
                value={values.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
                className='form-control'
                
              />
              {errors.apellido && touched.apellido && (
                <div className="alert alert-danger mt-1">{errors.apellido}</div>
              )}
            </div>
            <div className="col-md-12 mb-3">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                placeholder="nahuel@davinci.edu.ar"
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
              <label htmlFor="dni">DNI</label>
              <input
                name="dni"
                type="text"
                placeholder="11.222.333"
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
              <label htmlFor="provincia">Provincia</label>
              <select className="custom-select d-block w-100" id="provincia" placeholder="Elegi una provincia">
                <option>Buenos Aires</option>
                <option>Chaco</option>
                <option>Formosa</option>
                <option>Mendoza</option>
                <option>San Luis</option>
                <option>Salta</option>
                <option>Entre Ríos</option>
              </select>
              {errors.provincia && touched.provincia && (
                <div className="alert alert-danger mt-1">{errors.provincia}</div>
              )}
            </div>
            <div className="col-md-12 mb-3">
              <label htmlFor="numTarj">Número de tarjeta</label>
              <input
                name="numTarj"
                type="text"
                placeholder="1111 2222 3333 4444"
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
              <label htmlFor="expiracion">Fecha de expiración</label>
              <input
                name="expiracion"
                type="month"
                placeholder="Fecha"
                value={values.expiracion}
                onChange={handleChange}
                onBlur={handleBlur}
                className='form-control'
                
              />
              {errors.expiracion && touched.expiracion && (
                <div className="alert alert-danger mt-1">{errors.expiracion}</div>
              )}
            </div>
            <div className="col-md-12 mb-3">
              <label htmlFor="codigo">Código de seguridad</label>
              <input
                name="codigo"
                type="text"
                placeholder="123"
                value={values.codigo}
                onChange={handleChange}
                onBlur={handleBlur}
                className='form-control'
                
              />
              {errors.codigo && touched.codigo && (
                <div className="alert alert-danger mt-1">{errors.codigo}</div>
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