import React, {useState} from 'react';
import SideBar from "./Components/Sidebar/SideBar";
import Main from "./Components/Main/Main";
import {HashRouter as Router} from 'react-router-dom'

const App = () =>{
    const [completeBar, setShowBar] = useState(false); //State hook to open or close sidebar
    const [inDashboard, changeView] = useState(true);

    return (
        <Router>
            <div>
                <SideBar
                    change={setShowBar}
                    status={completeBar}
                    name={"Armando Hernández"}
                    notHome={changeView}
                />
                <Main
                    status={completeBar}
                    name={"Armando Hernandez"}
                    indash={inDashboard}
                />
            </div>
        </Router>
    );
}

export default App;
