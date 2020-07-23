import React from "react";

const ObjectiveStatus = () => {
    let statusClassNames = ["pendientes", "cumplidos", "totales"]
    let doneObj = 15
    return (
        <div className={"objectiveStatus"}>
            {statusClassNames.map((item) => {
                return (
                    <div className={"objCount"}>
                        <p>Objetivos {item}</p>
                        <div className={`objNum ${item}`}>
                            {doneObj}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default ObjectiveStatus;