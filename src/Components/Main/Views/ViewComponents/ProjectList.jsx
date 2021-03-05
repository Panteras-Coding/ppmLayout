import React from "react";

const ProjectList = () => {
    return (
        <div className={"dashContProj"} >
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
    );
}

export default ProjectList;