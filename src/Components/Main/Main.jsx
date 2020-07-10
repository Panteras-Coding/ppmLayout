import React from 'react';
import Header from "./Header";
import WorkPlace from "./WorkPlace";

const Main = (props) => {

    let openedClassName = "main incomplete";
    if(props.status){
       openedClassName = "main complete"
    }

    return (
        <div className={openedClassName}>
            <Header name={props.name}/>
            <WorkPlace
                indash={props.indash}
            />
        </div>
    );
}

export default Main;