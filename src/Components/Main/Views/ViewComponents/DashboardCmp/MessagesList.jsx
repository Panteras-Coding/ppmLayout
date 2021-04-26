import React from "react";

const MessagesList = () => {
    let nCanal = [1, 2, 3, 4]
    let nMsg = 22;
    return (
        <div className={"dashContMsg"} >
            <div className={"numMsg"}>
                <p className={"dashContTitle"}>Mis Mensajes</p>
                <span>{nMsg}</span>
            </div>
            <div className={"messageList"}>
                <div className={"messageCont"}>
                    <p>Miembro: Contenido del Mensaje</p>
                    <p>Canal {nCanal[0]}</p>
                    <button className={"channelOne"}>Responder</button>
                </div>
                <div className={"messageCont"}>
                    <p>Miembro: Contenido del Mensaje</p>
                    <p>Canal {nCanal[0]}</p>
                    <button className={"channelOne"}>Responder</button>
                </div>
                <div className={"messageCont"}>
                    <p>Miembro: Contenido del Mensaje</p>
                    <p>Canal {nCanal[3]}</p>
                    <button className={"channelFour"}>Responder</button>
                </div>
            </div>
        </div>
    );
}

export default MessagesList;