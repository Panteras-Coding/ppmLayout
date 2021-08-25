import React, { useState } from "react";
import UserActions from "./UserActions";

const UserSpace = (props) => {

    let content = <p>{props.name}</p>;
    let imgSrc = "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600119/59070200-icono-de-usuario-hombre-perfil-hombre-de-negocios-avatar-icono-persona-en-la-ilustraci%C3%B3n-vectorial.jpg?ver=6"
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
                <button id="btnUser"
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