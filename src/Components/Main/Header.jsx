import React from "react";

const Header = (props) => {
    let firstName = props.name.split(' ').slice(0, -1).join(' ');  //Removes surname from complete name from props
    return (
        <header>
            <h3>Buen día, <span>{firstName}</span></h3>
            <input type={"text"} name={"searchbox"} placeholder={"Buscar..."}/>
        </header>
    );
}

export default Header;