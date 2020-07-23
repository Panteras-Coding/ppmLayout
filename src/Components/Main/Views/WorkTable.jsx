import React from "react";
import WorkListItem from "./ViewComponents/WorkListItem";

const WorkTable = () => {
    return(
        <div style={{height: "100%",width: "100%", display:"flex",flexDirection: "column"}}>
            <header>
                <button className={"carpetBtn"} type={"button"}>Lista</button>
                <button className={"carpetBtn"} type={"button"}>Miembros</button>
                <button className={"carpetBtn"} type={"button"}>Calendario</button>
                <button className={"carpetBtn"} type={"button"}>Gantt</button>
                <button className={"carpetBtn"} type={"button"}>Tablón</button>
                <button className={"carpetBtn"} type={"button"}>Árbol</button>
            </header>
            <div className={"workListCont"}>
                <div className={"workTitleBar"}>
                    <p>Objetivos de Agrupación, proyecto, área</p>
                    <button className={"workTitleBtn"} type={"button"}>+ Agregar objetivo</button>
                </div>
                <hr/>
                <div className={"objWorkList"}>
                    <div className={"labelList"}>
                        <p>Nombre</p>
                        <p>#objetivos</p>
                        <p>#miembros</p>
                        <p>color</p>
                        <p>acciones</p>
                    </div>
                    <WorkListItem/>
                    <WorkListItem/>
                    <WorkListItem/>
                    <WorkListItem/>
                    <WorkListItem/>
                    <WorkListItem/>
                    <WorkListItem/>
                    <WorkListItem/>
                    <WorkListItem/>
                    <WorkListItem/>
                    <WorkListItem/>
                    <WorkListItem/>
                    <WorkListItem/>
                    <WorkListItem/>
                    <WorkListItem/>
                    <WorkListItem/>
                </div>
            </div>

        </div>
    );
}

export default WorkTable;