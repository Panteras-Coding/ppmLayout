import React from "react";

const ReminderList = () => {
    let nReminder = 4;
    return (
        <div className={"dashContReminder"}>
            <div className={"numReminder"}>
                <p className={"dashContTitle"}>Mis Recordatorios</p>
                <span>{nReminder}</span>
            </div>
            <div className={"reminderList"}>
                <div className={"reminderCont1"}>
                    <p>Descripción</p>
                </div>
                <div className={"reminderCont2"}>
                    <p>Descripción</p>
                </div>
                <div className={"reminderCont3"}>
                    <p>Descripción</p>
                </div>
                <div className={"reminderCont4"}>
                    <p>Descripción</p>
                </div>
            </div>
        </div>
    );
}

export default ReminderList;