import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Register from "../Register/Register.js";
import { MainContainer, MainContainerForm, MainContainerButton, MainContainerInput } from "./Login.style";


function Login(props){
    return (
    <Switch>
        <Route path="/registration" component={Register}/>
        <MainContainer>
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
                        <MainContainerForm action="#">
                            <img alt={"Logo Panteras"} src={require("../../Assets/businessman.svg")}/>
                            <div className="idIcon">
                                <MainContainerInput inputType="email" placeholder="Usuario"/>
                                <img alt={"idIcon"} src={require("../../Assets/usuario-de-perfil.svg")}/>
                            </div>
                            <div className="idIcon">
                            <MainContainerInput inputType="password" placeholder="Contraseña"/>
                                <img alt={"lockIcon"} src={require("../../Assets/lock.svg")}/>
                            </div>
                            <p>Si aún no tienes cuenta, <Link to="/registration">regístrate aquí</Link></p> 
                            <MainContainerButton onClick={props.changeLog}>Login</MainContainerButton>
                        </MainContainerForm>
                    </div>
                </div>
            </div>
        </MainContainer>
    </Switch>
    );
  }

  export default Login;