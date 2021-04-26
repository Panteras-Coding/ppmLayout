import React from "react";
import ObjectiveStatus from "./ViewComponents/DashboardCmp/ObjectiveStatus";
import ObjectiveList from "./ViewComponents/DashboardCmp/ObjectiveList";
import ProjectList from "./ViewComponents/DashboardCmp/ProjectList";
import MessagesList from "./ViewComponents/DashboardCmp/MessagesList";
import EventList from "./ViewComponents/DashboardCmp/EventsList";
import ActivitiesList from "./ViewComponents/DashboardCmp/ActivitiesList";
import ReminderList from "./ViewComponents/DashboardCmp/ReminderList";

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