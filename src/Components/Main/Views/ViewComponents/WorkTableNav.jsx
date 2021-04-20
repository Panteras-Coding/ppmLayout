import React from 'react'
import {Link, useRouteMatch} from "react-router-dom";

const WorkTableNav = (props) => {
    let match = useRouteMatch();
    // let backColors = ["#A3E1EE", "#A3EEC3", "#EED5A3", "#E9A3EE", "#EEA3A3"]
    // let carpets = ["#A3E1EE", "#A3EEC3", "#EED5A3", "#E9A3EE", "#EEA3A3"]
    // carpets[props.index] = backColors[props.index]
    return (
        <div className={"workTableList"}>
            <Link
                to={`${match.url}/`}
                onClick={() => props.changePlace(0)}
                className={props.index === 0 ? "carpetBtnSelected" : "carpetBtn"}
            >
                Lista
            </Link>
            <Link
                to={`${match.url}/`}
                onClick={() => props.changePlace(1)}
                className={props.index === 1 ? "carpetBtnSelected" : "carpetBtn"}
            >
                Miembros
            </Link>
            <Link
                to={`${match.url}/`}
                onClick={() => props.changePlace(2)}
                className={props.index === 2 ? "carpetBtnSelected" : "carpetBtn"}
            >
                Tablón
            </Link>
            <Link
                to={`${match.url}/`}
                onClick={() => props.changePlace(3)}
                className={props.index === 3 ? "carpetBtnSelected" : "carpetBtn"}
            >
                Gantt
            </Link>
            <Link
                to={`${match.url}/`}
                onClick={() => props.changePlace(4)}
                className={props.index === 4 ? "carpetBtnSelected" : "carpetBtn"}
            >
                Árbol
            </Link>
        </div>
    );
}

export default WorkTableNav;