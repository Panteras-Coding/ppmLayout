import React from "react";

const Dashboard = () => {
    return(
        <>
           <div className={"objectiveStatus"}>
               <div className={"objCount"}>
                   <p>Objetivos pendientes</p>
                   <div className={"objNum"}>
                       <p>13</p>
                   </div>
               </div>
               <div className={"objCount"}>
                   <p>Objetivos cumplidos</p>
                   <div className={"objNum"}>
                       <p>15</p>
                   </div>
               </div>
               <div className={"objCount"}>
                   <p>Objetivos totales</p>
                   <div className={"objNum"}>
                       <p>28</p>
                   </div>
               </div>
           </div>
        </>
    );
}

export default Dashboard;