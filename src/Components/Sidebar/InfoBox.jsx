import React from "react";

const InfoBox = (props) => {

    let dataLink = "";

    if(!props.status){
        dataLink = (
            <div className={"dataCont"}>
                <p>Aviso de privacidad</p>
                <p>Contacto</p>
            </div>
        );
    }

    return(
        <div className={"infoBox"}>
            {dataLink}
            <img alt={"Logo Panteras"} src={require("../../Assets/upanterasblanco.svg")}/>
        </div>
    );
}

export default InfoBox;