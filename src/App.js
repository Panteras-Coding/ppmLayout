import React, {useState} from 'react';
import SideBar from "./Components/Sidebar/SideBar";
import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import {HashRouter as Router} from 'react-router-dom'
import DateProvider from './context/CalendarContext';

const App = () =>{

    const [isLoggedIn, setLogState] = useState(false);

    const [completeBar, setShowBar] = useState(false); //State hook to open or close sidebar
    const [inDashboard, changeView] = useState(true);
    
    if (isLoggedIn === true)
    {
        return (
            <DateProvider>
            <Router>
                <div>
                    <SideBar
                        change={setShowBar}
                        status={completeBar}
                        name={"Gabriela Velázquez"}
                        notHome={changeView}
                    />
                    <Main
                        status={completeBar}
                        name={"Gabriela Velázquez"}
                        indash={inDashboard}
                    />
                </div>
            </Router>
            </DateProvider>
        );
    }
    else{
        return (
            <Router>
                <div>
                    <Login changeLog={() => setLogState(true)}/>
                </div>
            </Router>
        );
    }
}

export default App;
