import React from 'react';
import { Link } from "react-router-dom";

const MenuList = (props) => {

    let closed = [];
    if(!props.status){
        closed = [
            <span>Dashboard</span>,
            <span>Mesa de trabajo</span>,
            <span>Calendario</span>,
            <span>Chat</span>
        ];
    }

    return (
        <ul>
            <Link
                to="/"
                onClick={()=>props.notHome(true)}
                className={"noUnder"}
            >
                <li>
                    <img alt={"Icon"} src={require('../../Assets/Dashboard.svg')}/>
                    {closed[0]}
                </li>
            </Link>
            <Link
                to="/workplace"
                onClick={()=>props.notHome(false)}
                className={"noUnder"}
            >
                <li>
                    <img alt={"Icon2"} src={require('../../Assets/monitor.svg')}/>
                    {closed[1]}
                </li>
            </Link>
            <Link
                to="/calendar"
                onClick={()=>props.notHome(false)}
                className={"noUnder"}
            >
                <li>
                    <img alt={"Icon3"} src={require('../../Assets/calendario.svg')}/>
                    {closed[2]}
                </li>
            </Link>
            <Link
                to="/inbox"
                onClick={()=>props.notHome(false)}
                className={"noUnder"}
            >
                <li>
                    <img alt={"Icon4"} src={require('../../Assets/Mensaje.svg')}/>
                    {closed[3]}
                </li>
            </Link>
        </ul>
    );
}

export default MenuList;