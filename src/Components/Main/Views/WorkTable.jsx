import React, { useState } from "react";
import WorkTableNav from "./ViewComponents/WorkTableNav";
import WorkList from "./ViewComponents/WorkList";
import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom'

const WorkTable = () => {
    const [workPlaceIndex, changePlace] = useState(0);
    const miembros = [
        { nombre: "José López Pérez", grupo: "Coding", semestre: "4°", carrera: "Ing. Mecatrónica	", area: "UI/UX", rol: 0 },
        { nombre: "José López Pérez", grupo: "E-racing", semestre: "1°", carrera: "Ing. Industrial", area: "Diseño", rol: 2 },
        { nombre: "José López Pérez", grupo: "Coding", semestre: "6°", carrera: "Ing. A.V.", area: "Web", rol: 1 },
        { nombre: "José López Pérez", grupo: "Coding", semestre: "8°", carrera: "Ing. Industrial", area: "Móvil	", rol: 3 },
        { nombre: "José López Pérez", grupo: "E-racing", semestre: "6°", carrera: "Ing. T.I.", area: "Diseño", rol: 0 },
        { nombre: "José López Pérez", grupo: "E-racing", semestre: "6°", carrera: "Ing. Industrial", area: "Diseño", rol: 0 }
    ]
    let title = ["Objetivos", "Miembros", "Tablón", "Diagrama", "Árbol"];
    let plusLabel = ["Objetivo", "Miembros", "Tablón", "Diagrama", "Árbol"];
    const roles = ["Coordinador", "Administrador", "Director", "Pasante"];
    const colorxrol = ["#c972b4", "#bf738c", "#a8d18f", "#71a1b1"]
    return (
        <div style={{ height: "85%", width: "100%", display: "flex", flexDirection: "column" }}>

<div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
    <button class="workFilterBtn" type="button">Filtrar: Nombre</button>
<button class="workFilterBtn" type="button">Solicitudes <span class="circle"></span></button></div>

            <div className={"workTableCard"}>
                <WorkTableNav className={"workTableLink"} index={workPlaceIndex} changePlace={changePlace} />
                <Switch>
                    <div className={"workListCont"}>
                        <div className={"workTitleBar"}>
                            <p>{title[workPlaceIndex]} de Agrupación, proyecto, área</p>
                            <button className={"workTitleBtn"} type={"button"}>+ Agregar {plusLabel[workPlaceIndex]}</button>
                        </div>
                        <hr />
                        {/*<Route path={`${match.path}/`} exact component={WorkList}/>*/}
                        { workPlaceIndex === 1 ? 
                        <div style={{overflowX: "auto"}}>
                            <table style={{ width: "100%", textAlign: "left" }}>
                                <tr className="tableHeader">
                                    <th>Nombre</th>
                                    <th>Grupo</th>
                                    <th>Semestre</th>
                                    <th>Carrera</th>
                                    <th>Área</th>
                                    <th>Rol</th>
                                    <th>   </th></tr>
                                   { miembros.map( miembro => {
                                       return (
                                           <tr className="miembro">
                                               <td>{miembro.nombre}</td>
                                               <td>{miembro.grupo}</td>
                                               <td>{miembro.semestre}</td>
                                               <td>{miembro.carrera}</td>
                                               <td>{miembro.area}</td>
                                               <td style={{color: colorxrol[miembro.rol], fontWeight: "600" }}>{roles[miembro.rol]}</td>
                                               <td>
                                               <img alt="Icon1" src={require('../../../Assets/basura.svg')} style={{marginRight: "0.6rem", width: "20px"}}/>
                                               <img alt="Icon2" src={require('../../../Assets/engranaje.svg')} style={{marginRight: "0.6rem", width: "20px"}}/>
                                               </td>
                                           </tr>
                                       )
                                   })} 
                                        
                                        </table>
                                </div>
                                : null }
                    </div>
                </Switch>
            </div>

        </div>
    );
}

export default WorkTable;