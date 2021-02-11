import React, { useState } from "react";
import UserActions from "./UserActions";

const UserSpace = (props) => {

    let content = <p>{props.name}</p>;
    let imgSrc = "https://armandohv.netlify.app/assets/me.26f2d9a77a5b54e87d9ea21847f278d1.jpg"
    let imgClassName = "profileImgNormal";
    if (props.status) {
        imgClassName = "profileImgSmall";
        content = ""
    }

    const [modal, setModal] = useState(false)


    return (
        <>
            <div className={"userProfile"}>
            <div style={{
                 display: modal ? 'block' : 'none',
                 right: '0',
                 top: '2.5rem',
                 position: 'absolute'
            }}
                onClick={() => setModal(!modal)}>
                        <UserActions
                            imgClassName={imgClassName}
                            imgSrc={imgSrc}
                            content={content}
                        />
                </div>
                <button
                    onClick={() => setModal(!modal)}
                    style={{
                        borderRadius: '50%'
                    }}
                >
                    <img className={imgClassName} alt={"Profile Pic"} src={imgSrc} />
                </button>
                {content}
  
                
                
            </div>

        </>

    );
}

export default UserSpace;