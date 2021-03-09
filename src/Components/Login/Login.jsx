import React from "react";

function Login(props){

    return <div className="mainContainerLogin">
    
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
                    <input id="user" type="email" placeholder="Usuario"/>
                    <input id="pwd" type="password" placeholder="Contraseña" />
                    <button onClick={props.changeLog}>Login</button>
                </form>
            </div>
        </div>
    
    </div>
  }

  export default Login;