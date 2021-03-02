import React, {useState} from "react";
import WorkTableNav from "./ViewComponents/WorkTableNav";
import WorkList from "./ViewComponents/WorkList";
import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom'

const WorkTable = () => {
    let match = useRouteMatch()
    const [workPlaceIndex, changePlace] = useState(0);
    let title = "Objetivos"
    let plusLabel = "Objetivo"
    if(workPlaceIndex === 1){
        title = "Miembros"
        plusLabel = "Miembro"
    }
    return(
        <div style={{height: "85%",width: "100%", display:"flex",flexDirection: "column"}}>
            
                <button className={"workFilterBtn"} type={"button"}>Filtrar:   Por equipo</button>
            
            <div className={"workTableCard"}>
                <WorkTableNav className={"workTableLink"} index={workPlaceIndex} changePlace={changePlace}/>           
                <Switch>
                    <div className={"workListCont"}>
                        <div className={"workTitleBar"}>
                            <p>{title} de Agrupación, proyecto, área</p>
                            <button className={"workTitleBtn"} type={"button"}>+ Agregar {plusLabel}</button>
                        </div>
                        <hr/>
                        {/*<Route path={`${match.path}/`} exact component={WorkList}/>*/}

                    </div>
                </Switch>
            </div>

        </div>
    );
}

export default WorkTable;