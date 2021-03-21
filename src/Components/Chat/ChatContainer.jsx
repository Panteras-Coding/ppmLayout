import React from "react";

function ChatContainer(){
    return <div id="chat-container">
        <div id="new-message-container">
            <div id="chat-form">
                <input type="text" placeholder="Enviar mensaje"/>
                <img src={require('../../Assets/clip-de-papel.svg')} alt="fileImg" />
                <img src={require('../../Assets/circle-check.svg')} alt="chkImg" />
            </div>
        </div>
    </div>
}

export default ChatContainer;