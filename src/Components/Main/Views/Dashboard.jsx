import React from "react";
import ObjectiveStatus from "./ViewComponents/ObjectiveStatus";

const Dashboard = () => {
    return(
        <>
            <ObjectiveStatus/>
            <div className={"dashCont"}>
                <p className={"dashContTitle"}>Mis Objetivos</p>
                <div className={"objList"}>
                    <div className={"objectiveCont"}>
                        <p>Objetivo</p>
                        <p>Fecha de entrega</p>
                        <p>Equipo</p>
                        <div className={"colorCircle"}></div>
                    </div>
                    <div className={"objectiveCont"}>
                        <p>Objetivo</p>
                        <p>Fecha de entrega</p>
                        <p>Equipo</p>
                        <div className={"colorCircle"}></div>
                    </div>
                    <div className={"objectiveCont"}>
                        <p>Objetivo</p>
                        <p>Fecha de entrega</p>
                        <p>Equipo</p>
                        <div className={"colorCircle"}></div>
                    </div>
                    <div className={"objectiveCont"}>
                        <p>Objetivo</p>
                        <p>Fecha de entrega</p>
                        <p>Equipo</p>
                        <div className={"colorCircle"}></div>
                    </div>
                    <div className={"objectiveCont"}>
                        <p>Objetivo</p>
                        <p>Fecha de entrega</p>
                        <p>Equipo</p>
                        <div className={"colorCircle"}></div>
                    </div>
                    <div className={"objectiveCont"}>
                        <p>Objetivo</p>
                        <p>Fecha de entrega</p>
                        <p>Equipo</p>
                        <div className={"colorCircle"}></div>
                    </div>
                </div>
            </div>
            <div className={"dashCont"} >
                <p className={"dashContTitle"}>Mis proyectos</p>
                <div className={"projectList"}>
                    <div className={"projectCont"}>
                        <p>Proyecto</p>
                        <p>Rango</p>
                        <p>#Miembros</p>
                        <p>#Objetivos</p>
                    </div>
                    <div className={"projectCont"}>
                        <p>Proyecto</p>
                        <p>Rango</p>
                        <p>#Miembros</p>
                        <p>#Objetivos</p>
                    </div>
                    <div className={"projectCont"}>
                        <p>Proyecto</p>
                        <p>Rango</p>
                        <p>#Miembros</p>
                        <p>#Objetivos</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;