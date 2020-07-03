import React from 'react';
import './app.css'
import SideBar from "./Components/sideBar/SideBar";
import WorkSpace from "./Components/Workspace/WorkSpace";


function App() {
  return (
    <div className="app">
        <SideBar/>
        <WorkSpace/>
    </div>
  );
}

export default App;
