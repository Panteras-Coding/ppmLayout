import React from "react";

const ObjectiveStatus = () => {
    return (
        <div className={"objectiveStatus"}>
            <div className={"objCount"}>
                <p>Objetivos pendientes</p>
                <div className={"objNum pending"}>
                    13
                </div>
            </div>
            <div className={"objCount"}>
                <p>Objetivos cumplidos</p>
                <div className={"objNum done"}>
                    15
                </div>
            </div>
            <div className={"objCount"}>
                <p>Objetivos totales</p>
                <div className={"objNum total"}>
                    28
                </div>
            </div>
        </div>
    );
}

export default ObjectiveStatus;