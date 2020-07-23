import React from 'react'
import {Link, useRouteMatch} from "react-router-dom";

const WorkTableNav = (props) => {
    let match = useRouteMatch();
    let backColors = ["#dde7f3","#F5D4D4"]
    let carpets = ["#efefef","#efefef"]
    carpets[props.index] = backColors[props.index]
    return (
        <header>
            <Link
                to={`${match.url}/`}
                onClick={() => props.changePlace(0)}
                className={"carpetBtn"}
                style={{backgroundColor: carpets[0]}}
            >
                Lista
            </Link>
            <Link
                to={`${match.url}/members`}
                onClick={() => props.changePlace(1)}
                className={"carpetBtn"}
                style={{backgroundColor: carpets[1]}}
            >
                Miembros
            </Link>
            <button className={"carpetBtn"} type={"button"}>Calendario</button>
            <button className={"carpetBtn"} type={"button"}>Gantt</button>
            <button className={"carpetBtn"} type={"button"}>Tablón</button>
            <button className={"carpetBtn"} type={"button"}>Árbol</button>
        </header>
    );
}

export default WorkTableNav;