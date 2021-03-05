import React from "react";

const ObjectiveList = () => {
    let nObj = 13;
    return (
        <div className={"dashCont"}>
            <div className={"numObj"}>
                <p className={"dashContTitle"}>Mis Objetivos</p>
                <span>{nObj}</span>
            </div>
            <button className={"objBtn"} type={"button"}>Filtrar: Por importancia</button>
            <div className={"objList"}>
                <div className={"objectiveCont"}>
                    <p>Nombre</p>
                    <p>Fecha de entrega</p>
                    <p>Equipo</p>
                </div>
                <div className={"objectiveCont"}>
                    <p>Nombre</p>
                    <p>Fecha de entrega</p>
                    <p>Equipo</p>
                </div>
                <div className={"objectiveCont"}>
                    <p>Nombre</p>
                    <p>Fecha de entrega</p>
                    <p>Equipo</p>
                </div>
                <div className={"objectiveCont"}>
                    <p>Nombre</p>
                    <p>Fecha de entrega</p>
                    <p>Equipo</p>
                </div>
                <div className={"objectiveCont"}>
                    <p>Nombre</p>
                    <p>Fecha de entrega</p>
                    <p>Equipo</p>
                </div>
                <div className={"objectiveCont"}>
                    <p>Nombre</p>
                    <p>Fecha de entrega</p>
                    <p>Equipo</p>
                </div>
            </div>
        </div>
    );
}

export default ObjectiveList;