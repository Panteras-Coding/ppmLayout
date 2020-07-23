import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog, faPlusCircle, faTrashAlt, faGreaterThan} from "@fortawesome/free-solid-svg-icons";

const WorkListItem = () => {
    return(
        <span>
            <div className={"objectiveWorkCont"}>
                <p id={"workProject"}><FontAwesomeIcon
                    icon={faGreaterThan}
                    size={"1x"}
                    style={{ color: '#acacac',marginRight: "10px" }}
                />
                    Objetivo
                </p>
                <p>30</p>
                <p>23</p>
                <p><div className={"colorCircle"}>{""}</div></p>
                <div style={{width: "100px", textAlign: "center" }}>
                    <FontAwesomeIcon
                        icon={faCog}
                        size={"2x"}
                        style={{ color: '#acacac',marginRight: "10px" }}
                        className={"actionIcon"}
                    />
                    <FontAwesomeIcon
                        icon={faTrashAlt}
                        size={"2x"}
                        style={{ color: '#E18D8D',marginRight: "10px" }}
                        className={"actionIcon"}
                    />
                    <FontAwesomeIcon
                        icon={faPlusCircle}
                        size={"2x"}
                        style={{ color: '#8bba8e' }}
                        className={"actionIcon"}
                    />
                </div>
            </div>
        </span>
    );
}

export default WorkListItem;