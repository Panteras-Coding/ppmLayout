import React from "react";

const ObjectiveStatus = () => {
    let statusClassNames = ["Nivel", "Objetivos"]
    let doneObj = 15
    return (
        <div className={"objectiveStatus"}>
            {statusClassNames.map((item) => {
                return (
                    <div className={"objCount"}>
                        <p>{item}</p>
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