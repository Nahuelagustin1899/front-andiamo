
import { Route, Switch, BrowserRouter } from "react-router-dom";
import React, { useState } from 'react';

/* Views */
import Home from "./views/Home";
import Blog from "./views/Blog";
import EmpresasUsuarios from "./views/EmpresasUsuarios";
import Empresas from "./views/Empresas";
import NuevasEmpresas from "./views/NuevasEmpresas";
import ViajesUsuarios from "./views/ViajesUsuarios";
import Viajes from "./views/Viajes";
import NuevosViajes from "./views/NuevosViajes";
import Login from "./views/Login";
import ElegirAsiento from "./views/ElegirAsiento";
import Pago from "./views/Pago";
import Perfil from "./views/Perfil";
import SantaTeresita from "./views/SantaTeresita";
import Miramar from "./views/Miramar";
import SanBernardo from "./views/SanBernardo";
import EditarUsuario from "./views/EditarUsuario";
import EditarViaje from "./views/EditarViaje";
import EditarViajeAdmin from "./views/EditarViajeAdmin";
import EditarEmpresas from "./views/EditarEmpresas";
import Registrarse from "./views/Registrarse";
import Documentos from "./views/Documentos";
import Menores from "./views/Menores";
import Terminales from "./views/Terminales";
import ReservaExitosa from "./views/ReservaExitosa";
import PanelAdmin from "./views/PanelAdmin";
import EnviarCodigo from "./views/EnviarCodigo";
import CambiarPassword from "./views/CambiarPassword";

/* Components */
import Nav from "./components/Nav";
import authService, { AuthContext } from "./services/auth";
import AuthRoute from "./components/AuthRoute";
import Footer from "./components/Footer";
import Bot from "./components/Bot";

/* Hooks */
import { useNotification } from "./hooks";



function App() {

  const [Notification, setNotification] = useNotification();
  const [authUser, setAuthUser] = useState(authService.getUserData());

  const handleEmpresaEliminada = data => {
    setNotification({
      type: 'success',
      text: 'La empresa fue eliminada exitosamente',
      title: 'Felicidades'
    });
  };

  const handleEmpresaErrorEliminar = data => {
    setNotification({
      type: 'danger',
      text: 'La empresa no pudo ser eliminada',
      title: 'Error'
    });
  };

  const handleEmpresaCreada = data => {
    setNotification({
      type: 'success',
      text: 'La empresa fue creada exitosamente',
      title: 'Felicidades'
    });
  };

  const handleViajeEliminado = data => {
    setNotification({
      type: 'success',
      text: 'El viaje fue eliminado exitosamente',
      title: 'Felicidades'
    });
  };

  const handleViajeErrorEliminar = data => {
    setNotification({
      type: 'danger',
      text: 'el viaje no pude ser eliminado',
      title: 'Error'
    });
  };

  const handleViajeCreada = data => {
    setNotification({
      type: 'success',
      text: 'El viaje fue creado exitosamente',
      title: 'Felicidades'
    });
  };

  const handleLogin = data => {
    setNotification({
      type: 'success',
      text: 'Iniciaste sesión con éxito',
      title: 'Felicidades'
    });
  };

  const handleLoginOut = data => {
    setNotification({
      type: 'danger',
      text: 'No iniciaste sesión con éxito',
      title: 'Error'
    });
  };

  const handleLogOut = data => {
    setNotification({
      type: 'success',
      text: 'Se cerro sesión con éxito.',
      title: 'Felicidades'
    });
  };

  const handleEditarPerfil = data => {
    setNotification({
      type: 'success',
      text: 'El perfil se editó exitosamente',
      title: 'Felicidades'
    });
  };

  const handleEditarViaje = data => {
    setNotification({
      type: 'success',
      text: 'El viaje se editó exitosamente',
      title: 'Felicidades'
    });
  };

  const handleEditarEmpresa = data => {
    setNotification({
      type: 'success',
      text: 'La empresa se editó exitosamente',
      title: 'Felicidades'
    });
  };

  const handleRegistroUsuario = data => {
    setNotification({
      type: 'success',
      text: 'El registro fue exitoso',
      title: 'Felicidades'
    });
  };

  const handleEnviarCodigo = data => {
    setNotification({
      type: 'success',
      text: 'El código se envió exitosamente',
      title: 'Felicidades'
    });
  };
  
  const handleCambiarPassword = data => {
    setNotification({
      type: 'success',
      text: 'La contraseña se cambió exitosamente',
      title: 'Felicidades'
    });
  };


  return (

    <AuthContext.Provider value={{
      user: authUser,
      updateAuthData(data) {
        setAuthUser(data);
      }
    }}>

      <div className="App">
        <div className="pt-3">
          <Nav
            notExitosa={handleLogOut}
          />
          <Bot />
          {
            (Notification)
          }
          <BrowserRouter>
            <Switch>
              <AuthRoute path="/reservaexitosa" component={Pago}>
                <ReservaExitosa exact component={ReservaExitosa} />
              </AuthRoute>
              <AuthRoute path="/checkout" >
                <Pago exact component={Pago} />
              </AuthRoute>
              <AuthRoute path="/editarempresa">
                <EditarEmpresas exact component={EditarEmpresas}
                  notExitosa={handleEditarEmpresa}
                />
              </AuthRoute>
              <AuthRoute path="/editarusuario">
                <EditarUsuario exact component={EditarUsuario}
                  notExitosa={handleEditarPerfil}
                />
              </AuthRoute>
              <Route path="/registrarse">
                <Registrarse exact component={Registrarse}
                  notExitosa={handleRegistroUsuario}
                />
              </Route>
              <AuthRoute path="/editarviaje">
                <EditarViaje exact component={EditarViaje}
                  notExitosa={handleEditarViaje}
                />
              </AuthRoute>
              <AuthRoute path="/editarviajeadmin">
                <EditarViajeAdmin exact component={EditarViajeAdmin}
                  notExitosa={handleEditarViaje}
                />
              </AuthRoute>
              <AuthRoute path="/carrito">
                <ElegirAsiento exact component={ElegirAsiento} />
              </AuthRoute>
              <AuthRoute path="/viajes/nueva" >
                <NuevosViajes exact
                  notExitosa={handleViajeCreada}
                />
              </AuthRoute>
              <AuthRoute path="/viajes" component={Viajes}>
                <Viajes exact
                  notExitosaEliminar={handleViajeEliminado}
                  notDenegadaEliminar={handleViajeErrorEliminar}
                />
              </AuthRoute>
              <AuthRoute path="/paneladmin" component={PanelAdmin}>
                <PanelAdmin exact
                  notExitosaEliminar={handleEmpresaEliminada}
                  notDenegadaEliminar={handleEmpresaErrorEliminar}
                />
              </AuthRoute>
              <Route exact path="/viajesusuarios" component={ViajesUsuarios} />
              <AuthRoute path="/empresaspanel">
                <Empresas exact
                  notExitosaEliminar={handleEmpresaEliminada}
                  notDenegadaEliminar={handleEmpresaErrorEliminar}
                />
              </AuthRoute>
              <AuthRoute path="/empresas/nueva">
                <NuevasEmpresas exact
                  notExitosa={handleEmpresaCreada}
                />
              </AuthRoute>
              <Route path="/iniciar-sesion">
                <Login exact
                  notExitosa={handleLogin}
                  notExitosa={handleLoginOut}
                />
              </Route>
              <AuthRoute path="/perfil" >
                <Perfil exact component={Perfil} />
              </AuthRoute>
              <Route exact path="/empresasusuarios" component={EmpresasUsuarios} />
              <Route path="/" exact component={Home} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/santateresita" component={SantaTeresita} />
              <Route exact path="/miramar" component={Miramar} />
              <Route exact path="/sanber" component={SanBernardo} />
              <Route exact path="/menores" component={Menores} />
              <Route exact path="/documentos" component={Documentos} />
              <Route exact path="/terminales" component={Terminales} />
              <Route exact path="/codigo" component={EnviarCodigo}>
                <EnviarCodigo
                  notExitosa={handleEnviarCodigo}
                />
              </Route>

              <Route exact path="/cambiarpassword" component={CambiarPassword}>
                <CambiarPassword
                  notExitosa={handleCambiarPassword}
                />
              </Route>
            </Switch>
            <Footer />
          </BrowserRouter>

        </div>

      </div>

    </AuthContext.Provider>


  );
}

export default App;
