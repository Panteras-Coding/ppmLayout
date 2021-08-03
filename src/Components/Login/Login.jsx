import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Register from "../Register/Register";

function Login(props){
    return (
    <Switch>
        <Route path="/registration" component={Register}/>
        <div className="mainContainerLogin">
        
            <div className="container" id="container">
                <div className="form-container sign-in-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Bienvenido a Panteras PM<sup>[ING]</sup></h1>
                            <p>Si tienes problemas para acceder a tu cuenta, contáctanos</p>
                            <img alt={"Logo Panteras"} src={require("../../Assets/Coding[ING].svg")}/>
                        </div>
                    </div>
                </div>

                <div className="overlay-container">
                    <form action="#">
                        <img alt={"Logo Panteras"} src={require("../../Assets/businessman.svg")}/>
                        <div className="idIcon">
                            <input type="email" placeholder="Usuario"/>
                            <img alt={"idIcon"} src={require("../../Assets/usuario-de-perfil.svg")}/>
                        </div>
                        <div className="idIcon">
                            <input type="password" placeholder="Contraseña" />
                            <img alt={"lockIcon"} src={require("../../Assets/lock.svg")}/>
                        </div>
                        <p>Si aún no tienes cuenta, <Link to="/registration">regístrate aquí</Link></p> 
                        <button onClick={props.changeLog}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    </Switch>
    );
  }

  export default Login;