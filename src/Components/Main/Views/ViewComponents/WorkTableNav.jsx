import React from 'react'
import {Link, useRouteMatch} from "react-router-dom";

const WorkTableNav = (props) => {
    let match = useRouteMatch();
    let backColors = ["#A3E1EE", "#A3EEC3", "#EED5A3", "#E9A3EE", "#EEA3A3"]
    let carpets = ["#A3E1EE", "#A3EEC3", "#EED5A3", "#E9A3EE", "#EEA3A3"]
    carpets[props.index] = backColors[props.index]
    return (
        <div className={"workTableList"}>
            <Link
                to={`${match.url}/`}
                onClick={() => props.changePlace(0)}
                className={"carpetBtn"}
                style={{backgroundColor: carpets[0]}}
            >
                Lista
            </Link>
            <Link
                to={`${match.url}/`}
                onClick={() => props.changePlace(1)}
                className={"carpetBtn"}
                style={{backgroundColor: carpets[1]}}
            >
                Gantt
            </Link>
            <Link
                to={`${match.url}/`}
                onClick={() => props.changePlace(2)}
                className={"carpetBtn"}
                style={{backgroundColor: carpets[2]}}
            >
                Calendario
            </Link>
            <Link
                to={`${match.url}/`}
                onClick={() => props.changePlace(3)}
                className={"carpetBtn"}
                style={{backgroundColor: carpets[3]}}
            >
                Diagrama
            </Link>
            <Link
                to={`${match.url}/`}
                onClick={() => props.changePlace(4)}
                className={"carpetBtn"}
                style={{backgroundColor: carpets[4]}}
            >
                Árbol
            </Link>
        </div>
    );
}

export default WorkTableNav;