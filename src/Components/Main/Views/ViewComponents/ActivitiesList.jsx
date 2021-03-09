import React from "react";

const ActivitiesList = () => {
    let activityNames = ["Actividad 1", "Actividad 2", "Actividad 3", "Actividad 4"]
    return (
        <div className={"dashContAct"}>
            <p className={""}>Actividades</p>
            {activityNames.map((item) => {
                return (
                    <div className={"activityCont"}>
                        <p>{item}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default ActivitiesList;