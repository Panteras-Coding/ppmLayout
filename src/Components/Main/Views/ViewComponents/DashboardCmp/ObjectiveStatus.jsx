import React, {useState} from "react";

const ObjectiveStatus = (props) => {
    let statusClassNames = ["Cumplidos", "Pendientes"]
    let doneObj = 13
    let totalObj = 26
    return (
            <div className={"objectiveStatus"}>
                <div className={"totalObj"}>
                    <p className={"dashContTitle"}>Total de objetivos: {totalObj} </p>
                </div>
                <div className={"objectives"}>
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
            </div>
    );
}

export default ObjectiveStatus;