import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import Dashboard from "./Views/Dashboard";
import WorkTable from "./Views/WorkTable";
import Inbox from "./Views/Inbox";
import Calendar from "./Views/Calendar";

const WorkPlace = (props) => {
    let containerClass = "homeWorkPlace"
    if(!props.indash){
        containerClass = "workPlace"
    }

    return (
        <Switch>
            <div className={containerClass}>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/workplace">
                    <WorkTable />
                </Route>
                <Route path="/inbox">
                    <Inbox />
                </Route>
                <Route path="/calendar">
                    <Calendar />
                </Route>
            </div>
        </Switch>

    );
}

export default WorkPlace;