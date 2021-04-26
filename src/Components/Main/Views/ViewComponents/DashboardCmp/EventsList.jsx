import React from "react";

const EventList = () => {
    let nEvents = 7;
    return (
        <div className={"dashContEvents"}>
            <div className={"numEvents"}>
                <p className={"dashContTitle"}>Mis Eventos</p>
                <span>{nEvents}</span>
            </div>
            <div className={"eventList"}>
                <div className={"eventCont"}>
                    <p>Tipo</p>
                    <p>Fecha y hora</p>
                    <p>Equipo</p>
                </div>
                <div className={"eventCont"}>
                    <p>Tipo</p>
                    <p>Fecha y hora</p>
                    <p>Equipo</p>
                </div>
                <div className={"eventCont"}>
                    <p>Tipo</p>
                    <p>Fecha y hora</p>
                    <p>Equipo</p>
                </div>
            </div>
        </div>
    );
}

export default EventList;