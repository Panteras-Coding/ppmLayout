import React, {useState} from "react";
import ObjectiveStatus from "./ViewComponents/DashboardCmp/ObjectiveStatus";
import ObjectiveList from "./ViewComponents/DashboardCmp/ObjectiveList";
import ProjectList from "./ViewComponents/DashboardCmp/ProjectList";
import MessagesList from "./ViewComponents/DashboardCmp/MessagesList";
import EventList from "./ViewComponents/DashboardCmp/EventsList";
import ActivitiesList from "./ViewComponents/DashboardCmp/ActivitiesList";
import ReminderList from "./ViewComponents/DashboardCmp/ReminderList";
import WidgetModal from "./ViewComponents/WidgetModal";

const Dashboard = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    const [visibleDict] = useState(
    {
        objSts: true,
        objLst: true,
        rmdLst: true,
        prjLst: true,
        evtLst: true,
        mssLst: true,
        atsLst: true
    });

    return(
        <>
            {modal && (<WidgetModal func={toggleModal} visibleDict={visibleDict} />)}
            <button 
                onClick={toggleModal}
                className={"widgetsBtn"}
                type={"button"}><img  id="iconMenu"
                alt={"Icon"} 
                src={require('../../../Assets/menu.svg')} /><p>Configurar Widgets</p>
            </button>
            {visibleDict["objSts"] && <ObjectiveStatus/>}
            {visibleDict["objLst"] && <ObjectiveList/>}
            {visibleDict["rmdLst"] && <ReminderList/>}
            {visibleDict["prjLst"] && <ProjectList/>}
            {visibleDict["evtLst"] && <EventList/>}
            {visibleDict["mssLst"] && <MessagesList/>}
            {visibleDict["atsLst"] && <ActivitiesList/>}
        </>
    );
}

export default Dashboard;