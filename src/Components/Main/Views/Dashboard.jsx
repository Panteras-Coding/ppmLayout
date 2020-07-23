import React from "react";
import ObjectiveStatus from "./ViewComponents/ObjectiveStatus";
import ObjectiveList from "./ViewComponents/ObjectiveList";
import ProjectList from "./ViewComponents/ProjectList";

const Dashboard = () => {
    return(
        <>
            <ObjectiveStatus/>
            <ObjectiveList/>
            <ProjectList/>
        </>
    );
}

export default Dashboard;