import React from "react";

const Header = (props) => {
    let firstName = props.name.split(' ').slice(0, -1).join(' ');  //Removes surname from complete name from props
    return (
        <header>
            <h3>Buen día, <span>{firstName}</span></h3>
            <div id="inputFind">
                <input type={"text"} className="inputT" name={"searchbox"} placeholder={"Buscar"}/>
                <img src={require('../../Assets/Buscar.svg')} id="inputImg"/>
            </div>
        </header>
    );
}

export default Header;