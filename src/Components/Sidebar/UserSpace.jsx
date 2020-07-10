import React from "react";

const UserSpace = (props) => {

    let content = <p>{props.name}</p>;
    let imgSrc = "https://armandohv.netlify.app/assets/me.26f2d9a77a5b54e87d9ea21847f278d1.jpg"
    let imgClassName = "profileImgNormal";
    if (props.status){
        imgClassName = "profileImgSmall";
        content = ""
    }

    return (
        <div className={"userProfile"}>
            <img className={imgClassName} alt={"Profile Pic"} src={imgSrc}/>
            {content}
        </div>
    );
}

export default UserSpace;