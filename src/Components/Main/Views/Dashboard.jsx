import React from "react";
import ObjectiveStatus from "./ViewComponents/ObjectiveStatus";
import ObjectiveList from "./ViewComponents/ObjectiveList";
import ProjectList from "./ViewComponents/ProjectList";

const Dashboard = () => {
    return(
        <>
            <button className={"widgetsBtn"} type={"button"}><img  id="iconMenu" alt={"Icon"} src={require('../../../Assets/menu.svg')} /><p>Configurar Widgets</p></button>
            <ObjectiveStatus/>
            <ObjectiveList/>
            <ProjectList/>
        </>
    );
}

export default Dashboard;