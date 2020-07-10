import React from "react";

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return(
        <footer>
            &copy; Panteras {year}
        </footer>
    );
}

export default Footer;