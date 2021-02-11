import React from 'react'
import { Link } from 'react-router-dom'

const UserActions = ({imgSrc, imgClassName, content}) => {
    return (
        <div className={"userActions"}>
            <div className="header">
        <img className={imgClassName}  alt={"Profile Pic"} src={imgSrc} />
        {content}
        </div>
            <ul>
            <hr />

                <Link

                    className={"noUnder"}
                >
                    <li className="actionBtn">
                        <img  className="icon" alt={"Icon"} src={require('../../Assets/edit.svg')} />
                        <span>Editar Perfil</span>

                    </li>
                </Link>
                <hr />

                <Link

                    className={"noUnder"}
                >
                    <li className="actionBtn">
                        <img className="icon" alt={"Icon"} src={require('../../Assets/door-key.svg')} />
                        <span>Cambiar contraseña</span>
                    </li>
                </Link>
                <hr />

                <Link

                    className={"noUnder"}
                >
                    <li className="actionBtn">
                        <img className="icon" alt={"Icon"} src={require('../../Assets/engranaje.svg')} />
                        <span>Configuración</span>

                    </li>
                </Link>
                <hr />

                <Link

                    className={"noUnder"}
                >
                    <li className="actionBtn">
                        <img className="icon" alt={"Icon"} src={require('../../Assets/logout.svg')} />

                        <span>Cerrar sesión</span>

                    </li>
                </Link>
                <hr />

                <Link
                    className={"noUnder"}
                >
                    <li className="actionBtn">
                        <img className="icon" alt={"Icon"} src={require('../../Assets/information.svg')} />

                        <span>Ayuda</span>

                    </li>
                </Link>
                <hr />

            </ul>
        </div>
    )
}

export default UserActions