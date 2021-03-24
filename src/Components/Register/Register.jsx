import React from 'react';
import { Link } from "react-router-dom";

function Register() { 
    return (
        <div className="mainContainerRegister">
          <div className="containerReg" id="containerReg">
            <div className="form-containerReg sign-in-containerReg">
              <div className="overlayReg">
                <div className="overlay-panelReg overlay-leftReg">
                  <h1>Registro</h1>
                  <div className="idIconReg">
                    <input type="email" placeholder="ID" />
                    <img
                      alt={"Logo Panteras"}
                      src={require("../../Assets/upanterasblanco.svg")}
                    />
                  </div>
                  <div className="inputsReg">
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Apellido" />
                    <input type="password" placeholder="Contraseña" />
                    <input
                      id="userPwd2"
                      type="password"
                      placeholder="Confirmar contraseña"
                    />
                  </div>
                  <select name="cars" id="cars">
                    <option></option>
                    <option value="coding">Coding</option>
                    <option value="baja">Baja</option>
                    <option value="gaming">Gaming</option>
                    <option value="vortex">Vortex</option>
                    <option value="greensquad">Green Squad</option>
                  </select>
                  <p>Ya tienes cuenta <Link to="/">inicia sesión</Link></p>
                  <button>Regístrate</button>
                </div>
              </div>
            </div>
    
            <div className="overlay-containerReg">
              <h1>
                Bienvenido a Panteras PM<sup>[ING]</sup>
              </h1>
              <p>Si tienes problemas para acceder a tu cuenta, contáctanos</p>
              <img
                alt={"Logo Panteras"}
                src={require("../../Assets/upanterasblanco.svg")}
              />
            </div>
          </div>
        </div>
     );
}

export default Register;