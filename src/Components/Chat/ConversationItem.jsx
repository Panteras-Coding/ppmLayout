import React from "react";

function ConversationItem(props){

    var time = new Date();

    return <div className="conversation-item">
        <p className="timeMss">{time.getHours()}:{time.getMinutes()}</p>
        <img src={props.img} alt="profile_img" />
        <h5>{props.name}</h5>
        <p>{props.last_message}</p>
        <hr></hr>
    </div>
}

export default ConversationItem;