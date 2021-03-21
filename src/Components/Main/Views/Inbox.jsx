import React from "react";
import Rightbar from "../../Chat/Rightbar"
import ChatContainer from "../../Chat/ChatContainer"

const Inbox = () => {
    return(
        <div>
            <Rightbar />
            <ChatContainer />
            <div id="chat-form">
                <i class="fas fa-paperclip"></i>
            </div>
        </div>
    );
}

export default Inbox;