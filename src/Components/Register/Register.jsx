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
                  <div className="inputReg">
                    <div className="idIconReg">
                      <input type="email" placeholder="ID" />
                      <img alt={"lockIcon"} src={require("../../Assets/logoUP.svg")}/>
                    </div>
                    <div className="idIconReg">
                      <input type="text" placeholder="Nombre" />
                      <img alt={"lockIcon"} src={require("../../Assets/usuario-de-perfil.svg")}/>
                    </div>
                    <div className="idIconReg">
                      <input type="password" placeholder="Contraseña" />
                      <img alt={"lockIcon"} src={require("../../Assets/lock.svg")}/>
                    </div>
                    <div className="idIconReg">
                      <input type="text" placeholder="Carrera" />
                      <img alt={"lockIcon"} src={require("../../Assets/logoUP.svg")}/>
                    </div>
                    <div className="idIconReg">
                      <input type="text" placeholder="Apellido" />
                      <img alt={"lockIcon"} src={require("../../Assets/usuario-de-perfil.svg")}/>
                    </div>
                    <div className="idIconReg">
                      <input type="password" placeholder="Confirmar contraseña" />
                      <img alt={"lockIcon"} src={require("../../Assets/lock.svg")}/>
                    </div>
                  </div>
                  <div class="sidebar-box">
                    <select class="styled-select">
                      <option value="0">Grupo al que te vas a unir:</option>
                      <option value="1">Above</option>
                      <option value="2">Baja</option>
                      <option value="3">Coding</option>
                      <option value="4">Data Science</option>
                      <option value="5">Dynamics</option>
                      <option value="6">E-racing</option>
                      <option value="7">Green Squad</option>
                      <option value="8">Robotics</option>
                      <option value="9">Vortex</option>
                    </select>
                  </div>
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
                src={require("../../Assets/Coding[ING].svg")}
              />
            </div>
          </div>
        </div>
     );
}

export default Register;