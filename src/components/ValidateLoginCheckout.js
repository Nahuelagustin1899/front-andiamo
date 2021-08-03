import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";


const ValidateLoginCheckout = (props) => {

  const history = useHistory();

  const [msjCard, setMjsCard] = useState(''); 
  const handleChangeCard = (e, setFieldValue) => {
    

    setFieldValue('numTarj', e.target.value)
    console.log(e.target.value)


    switch (Number(e.target.value)) {
      case 4:
        setMjsCard('La tarjeta que esta ingresando es visa')
        break;
        case 5:
          setMjsCard('La tarjeta que esta ingresando es visa')
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
        .min(8, "El campo debe contener al menos 8 digitos"),
      numTarj: Yup.number()
        .required("El campo número de tarjeta no puede estar vacío")
        .min(16, "El campo debe contener al menos 16 digitos"),
        codigo: Yup.number()
        .required("El campo del còdigo no puede estar vacío")
        .min(3, "El campo debe contener al menos 3 digitos"),
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
              <label htmlFor="dni">Tipo de tarjeta</label>
              <select className="form-control" >
                <option selected disabled>Elegí tu tarjeta</option>
                <option value="mastercard">Mastercard</option>
                <option value="visa">Visa</option>
                <option value="santander">American Express</option>
                <option value="santander">Cabal</option>
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
                onChange={(e) => handleChangeCard(e, setFieldValue)}
                onBlur={handleBlur}
                className='form-control'

              />
              {errors.numTarj && touched.numTarj && (
                <div className="alert alert-danger mt-1">{errors.numTarj}</div>
              )}
              {
                msjCard && (
                  <div className="alert alert-success mt-1">{msjCard}</div>
                )
              }
            </div>

            <div className="col-md-12 mb-3">
              <label htmlFor="codigo">Código de expiración</label>
              <input
                name="codigo"
                type="text"
                maxlength="3"
                placeholder="Código de expiración"
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