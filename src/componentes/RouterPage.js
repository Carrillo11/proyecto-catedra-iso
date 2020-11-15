// Importacion de librerias requeridas
import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Importar el contexto
import { UserContext } from './../Contexto/Contexto';

// Elementos de la pagina
import SplashScreen from './elementos/SplashScreen/SplashScreen';
import BarraCarrito from './elementos/BarraCarrito/BarraCarrito';
import BarraNav from './elementos/BarraNav/BarraNav';
import Footer from './elementos/Footer/Footer';

// Paginas del sitio
import Inicio from './user/Inicio';
import ComoComprar from './user/ComoComprar';
import Faq from './user/PreguntasFrecuentes';
import QuienesSomos from './user/QuienesSomos';

// Paginas de inicio de sesion y registro
import InicioSesion from './InicioSesion';
import Registro from './Registro';

// class App extends React.Component {
function RouterPage() {
    let { user, load } = useContext(UserContext);

    return (
        <Router>
            <div className="App">
                {
                    // Si existe un usuario en el sitio, le permite ver las paginas principales, en otro caso,
                    // lo envia a la pagina de inicio de sesion
                    user
                    ?
                    <>
                        {/* Cabecera de la pagina */}
                        <header>
                            <BarraCarrito />
                            <BarraNav />
                        </header>

                        {/* Componente principal de la pagina */}
                        <Switch>

                            <Route exact path="/comoComprar">
                                <ComoComprar />
                            </Route>

                            <Route exact path="/faq">
                                <Faq />
                            </Route>

                            <Route exact path="/quienesSomos">
                                <QuienesSomos />
                            </Route>

                            <Route>
                                <Redirect to="/inicio" />
                            </Route>
                            
                        </Switch>

                        {/* Footer de la pagina */}
                        <Footer />
                    </>
                    :
                    load &&
                    <>
                        <Switch>
                            {/* Paginas de inicio de sesion y registro */}

                            <Route exact path="/inicioSesion">
                                <InicioSesion />
                            </Route>

                            <Route exact path="/registro">
                                <Registro />
                            </Route>

                            {/* Ruta de la pagina de inicio (Ruta raiz) */}

                            <Route>
                                <Redirect to="/inicioSesion" />
                            </Route>
                        </Switch>
                    </>
                }
            </div>
        </Router>
    );
}

export default RouterPage;