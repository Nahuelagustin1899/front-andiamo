import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';

const ValidateLoginCheckout = (props) => {

  const history = useHistory();

  

  return <Formik
    initialValues={{
      nombre: "",
      email: "",
      dni: "",
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
        .min(8,'No podes poner menos de 8 números')
        .max(8,'No podes poner más de 8 números'),
      numTarj: Yup.number()
        .required("El campo número de tarjeta no puede estar vacío")
        .min(16,'No podes poner menos de 16 números')
        .max(16,'No podes poner más de 16 números'),
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
          <TextField id="standard-basic" label="Standard" />
            <div className="col-md-12 mb-3">
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
              <input
                name="dni"
                type="text"
                placeholder="Dni del titular de la tarjeta"
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
              <input
                name="numTarj"
                type="text"
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
              <label htmlFor="expiracion">Fecha de vencimiento</label>
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
          
          </div>
          <Link onClick={handleSubmit} className="btn btn-primary btn-lg btn-block mb-5 mt-5" type="submit">Finalizar reserva</Link>


        </form>
      );
    }}
  </Formik>




};

export default ValidateLoginCheckout;