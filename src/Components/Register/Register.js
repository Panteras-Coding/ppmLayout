import { render } from '@testing-library/react';
import React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class Register extends Component { 
 constructor(props) {
    super(props)
      this.state = {
        name:'',
        lastName:'',
        id:'',
        hash:'',
        carrera:'',
        semestre:'',
        grupo:''
      }
  }
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('https://panteras-project-management.wn.r.appspot.com/users/register', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  render() {
    const { name, lastName, id, hash, carrera, semestre, grupo } = this.state
    return (
        <div className="mainContainerRegister">
          <div className="containerReg" id="containerReg">
            <div className="form-containerReg sign-in-containerReg">
              <div className="overlayReg">
                <div className="overlay-panelReg overlay-leftReg">
                  <h1>Registro</h1>
                  <form className="inputReg" onSubmit={this.submitHandler}>
                    <div className="prueba">
                      <div className="idIconReg">
                        <input type="text" name="id" placeholder="ID" value={id} onChange={this.changeHandler}/>
                        <img alt={"lockIcon"} src={require("../../Assets/logoUP.svg")}/>
                      </div>
                      <div className="idIconReg">
                        <input type="text" name="name" placeholder="Nombre" value={name} onChange={this.changeHandler}/>
                        <img alt={"lockIcon"} src={require("../../Assets/usuario-de-perfil.svg")}/>
                      </div>
                      <div className="idIconReg">
                      <input type="text" name="lastName" placeholder="Apellido" value={lastName} onChange={this.changeHandler}/>
                      <img alt={"lockIcon"} src={require("../../Assets/usuario-de-perfil.svg")}/>
                    </div>
                      <div className="idIconReg">
                        <input type="text" name="semestre" placeholder="Semestre" value={semestre} onChange={this.changeHandler}/>
                        <img alt={"lockIcon"} src={require("../../Assets/usuario-de-perfil.svg")}/>
                      </div>
                      <div className="idIconReg">
                        <input type="password" name="hash" placeholder="Contraseña" value={hash} onChange={this.changeHandler}/>
                        <img alt={"lockIcon"} src={require("../../Assets/lock.svg")}/>
                      </div>
                      <div className="idIconReg">
                        <input type="password" name="hash" placeholder="Confirmar contraseña" value={hash} onChange={this.changeHandler}/>
                        <img alt={"lockIcon"} src={require("../../Assets/lock.svg")}/>
                      </div>
                    </div>
                    <div>
                        <select name="carrera" value={carrera} onChange={this.changeHandler}>
                            <option>Ingeniería a la que perteneces:</option>
                            <option value="Animació y Videojuegos">Animación y Videojuegos</option>
                            <option value="Innovación y Diseño">Innovación y Diseño</option>
                            <option value="Industrial">Industrial</option>
                            <option value="Mecánica">Mecánica</option>
                            <option value="Mecatrónica">Mecatrónica</option>
                            <option value="TI">TI</option>
                        </select>
                    </div>
                    {/*<div className="idIconReg">
                      <input type="password" placeholder="Confirmar contraseña"/>
                      <img alt={"lockIcon"} src={require("../../Assets/lock.svg")}/>
                    </div> */}
                    {/*PROPS*/}
                    <div class="sidebar-box">
                      <select class="styled-select" name="grupo" value={grupo} onChange={this.changeHandler}>
                        <option>Grupo al que te vas a unir:</option>
                        <option value="Above">Above</option>
                        <option value="Baja">Baja</option>
                        <option value="Coding">Coding</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Dynamics">Dynamics</option>
                        <option value="E-racing">E-racing</option>
                        <option value="Green Squad">Green Squad</option>
                        <option value="Robotics">Robotics</option>
                        <option value="Vortex">Vortex</option>
                      </select>
                    </div>
                    <p>Ya tienes cuenta <Link to="/">inicia sesión</Link></p>
                    <button type="submit">Regístrate</button>
                  </form>
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
}

export default Register;