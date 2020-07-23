import React from "react";
import WorkListItem from "./WorkListItem";

const WorkList = () => {
    return(
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
    )
}

export default WorkList;