import React from "react";

const SideBarMenu = () => {
    return (
        <ul>
            <li tabIndex="0" className="icon-dashboard"><span>Dashboard</span></li>
            <li tabIndex="0" className="icon-customers"><span>Customers</span></li>
            <li tabIndex="0" className="icon-users"><span>Users</span></li>
            <li tabIndex="0" className="icon-settings"><span>Settings</span></li>
        </ul>
    )
};

export default SideBarMenu;