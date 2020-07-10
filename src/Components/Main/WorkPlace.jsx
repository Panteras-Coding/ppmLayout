import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import Dashboard from "./Dashboard";
import WorkTable from "./WorkTable";
import Inbox from "./Inbox";
import Calendar from "./Calendar";

const WorkPlace = (props) => {

    let home = <Dashboard />
    let containerClass = "homeWorkPlace"
    if(!props.indash){
        home = ""
        containerClass = "workPlace"
    }

    return (
        <Switch>
            <div className={containerClass}>
                <Route path="/">
                    {home}
                </Route>
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