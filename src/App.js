
import {Route, Switch, BrowserRouter } from "react-router-dom";
import React, {useState} from 'react';

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
import Registrarse from "./views/Registrarse";
import Documentos from "./views/Documentos";
import Menores from "./views/Menores";
import Terminales from "./views/Terminales";

/* Components */
import Nav from "./components/Nav";
import authService, {AuthContext} from "./services/auth";
import AuthRoute from "./components/AuthRoute";
import Footer from "./components/Footer";

/* Hooks */
import {useNotification} from "./hooks";



function App() {

  const [Notification, setNotification] = useNotification();
  const [authUser, setAuthUser] = useState(authService.getUserData());

  const handleEmpresaEliminada = data => {
    setNotification({
        type: 'success',
        text: 'La empresa fue eliminada exitosamente',
        title: 'Éxito'
    }); 
  };

  const handleEmpresaErrorEliminar = data => {
    setNotification({
        type: 'success',
        text: 'La empresa fue eliminada exitosamente',
        title: 'Éxito'
    });
  };

  const handleEmpresaCreada = data => {
    setNotification({
        type: 'success',
        text: 'La empresa fue cargada exitosamente',
        title: 'Éxito'
    });
  };

  const handleViajeEliminado = data => {
    setNotification({
        type: 'success',
        text: 'El viaje fue eliminado exitosamente',
        title: 'Éxito'
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
        text: 'El viaje fue publicado exitosamente',
        title: 'Éxito'
    });
  };

  const handleLogin = data => {
    setNotification({
        type: 'success',
        text: 'Iniciaste sesión con éxito',
        title: 'Éxito'
    });
};

  const handleLogOut = data => {
    setNotification({
        type: 'success',
        text: 'Se cerro sesión con éxito.',
        title: 'Éxito'
    });
  };




  return (

    <AuthContext.Provider value={{
      user: authUser, 
      updateAuthData(data) {
          setAuthUser(data);
      }}}>
        
    <div className="App">
      <div className="pt-3">
        <Nav
          notExitosa={handleLogOut}
        />
        {
         (Notification)
        }
        <BrowserRouter>
        <Switch>
            <AuthRoute path="/checkout" >
               <Pago  exact component={Pago}/>
            </AuthRoute>
            <AuthRoute path="/editarusuario">
               <EditarUsuario  exact component={EditarUsuario}/>
            </AuthRoute>
            <Route path="/registrarse">
               <Registrarse  exact component={Registrarse}/>
            </Route>
            <AuthRoute path="/editarviaje">
               <EditarViaje  exact component={EditarViaje}/>
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
                notExitosaEliminar={handleEmpresaEliminada}
                notDenegadaEliminar={handleEmpresaErrorEliminar}
              />
            </AuthRoute>
            <Route exact path="/viajesusuarios" component={ViajesUsuarios}/>
            <AuthRoute path="/empresaspanel"> 
              <Empresas exact
                notExitosaEliminar={handleViajeEliminado}
                notDenegadaEliminar={handleViajeErrorEliminar}
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
              />
            </Route>
            <AuthRoute path="/perfil" >
                <Perfil exact component={Perfil}/>
            </AuthRoute>
            <Route exact path="/empresasusuarios" component={EmpresasUsuarios}/>
            <Route path="/" exact component={Home}/>
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/santateresita" component={SantaTeresita} />
            <Route exact path="/miramar" component={Miramar} />
            <Route exact path="/sanber" component={SanBernardo} />
            <Route exact path="/menores" component={Menores} />
            <Route exact path="/documentos" component={Documentos} />
            <Route exact path="/terminales" component={Terminales} />
        </Switch>
        <Footer/>
        </BrowserRouter>

      </div>
      
    </div>
   
    </AuthContext.Provider>


  );
}

export default App;
