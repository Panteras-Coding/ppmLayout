import React from 'react';
import './sideBar.css';
import UserSpace from "./userSpace";
import SideBarMenu from "./sideBarMenu";


const SideBar = () => {
    return (
        <nav className="menu" tabIndex="0">
            <a href="javascript:void(0)" className="closebtn" onClick={""}>&#9783;</a>
            <div className="smartphone-menu-trigger"></div>
            <UserSpace />
            <SideBarMenu />
        </nav>
    );
}

export default SideBar;