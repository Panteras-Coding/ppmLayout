import React from 'react';
import MenuList from "./MenuList";
import UserSpace from "./UserSpace";
import InfoBox from "./InfoBox";
import Footer from "./Footer";

const SideBar = (props) => {
    let currentClassName = "sideBar sbOpened"
    if(props.status) {
        currentClassName = "sideBar sbClosed";
    }

    return (
        <div className={currentClassName}>
            <header><span onClick={() => props.change(!props.status)}>&#9776;</span></header>
            <UserSpace status={props.status} name={props.name}/>
            <div className={"listContainer"}>
                <MenuList
                    status={props.status}
                    notHome={props.notHome}
                />
                <InfoBox status={props.status}/>
                <Footer/>
            </div>

        </div>
    );
}

export default SideBar;