import React from "react";
import ObjectiveStatus from "./ViewComponents/ObjectiveStatus";
import ObjectiveList from "./ViewComponents/ObjectiveList";
import ProjectList from "./ViewComponents/ProjectList";
import MessagesList from "./ViewComponents/MessagesList";
import EventList from "./ViewComponents/EventsList";
import ActivitiesList from "./ViewComponents/ActivitiesList";
import ReminderList from "./ViewComponents/ReminderList";

const Dashboard = () => {
    return(
        <>
            <button className={"widgetsBtn"} type={"button"}><img  id="iconMenu" alt={"Icon"} src={require('../../../Assets/menu.svg')} /><p>Configurar Widgets</p></button>
            <ObjectiveStatus/>
            <ObjectiveList/>
            <ReminderList/>
            <ProjectList/>
            <EventList/>
            <MessagesList/>
            <ActivitiesList/>
        </>
    );
}

export default Dashboard;