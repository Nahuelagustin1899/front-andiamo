
import {Route, Switch, BrowserRouter } from "react-router-dom";

/* Views */
import Home from "./views/Home";
import Blog from "./views/Blog";
import EmpresasUsuarios from "./views/EmpresasUsuarios";
import Empresas from "./views/Empresas";
import NuevasEmpresas from "./views/NuevasEmpresas";
/* Components */
import Nav from "./components/Nav";

/* Hooks */
import {useNotification} from "./hooks";


function App() {

  const [Notification, setNotification] = useNotification();

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


  return (
    <div className="App">
      <div className="pt-3">
        <Nav/>
        {
         (Notification)
        }
      <BrowserRouter>
        <Switch>
            <Route path="/empresaspanel"> 
              <Empresas 
                notExitosaEliminar={handleEmpresaEliminada}
                notDenegadaEliminar={handleEmpresaErrorEliminar}
              />
            </Route>
            <Route path="/empresas/nueva"> 
              <NuevasEmpresas
                notExitosa={handleEmpresaCreada}
              />
            </Route>   
            <Route path="/empresasusuarios" component={EmpresasUsuarios}/>
            <Route path="/" exact component={Home}/>
            <Route path="/blog" component={Blog} />
        </Switch>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
