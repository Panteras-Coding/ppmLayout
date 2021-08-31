import React from "react";

const WidgetModal = (props) => {
    return(
        <>
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <h3>Configura tus widgets</h3><br/>
                    <form>
                        <div>
                            <input type="checkbox" name="opt1" defaultChecked={props.visibleDict["objSts"]} onClick={() => props.visibleDict["objSts"] = !props.visibleDict["objSts"]}/>
                            <label for="opt1">&nbsp; Total de objetivos&emsp;&emsp;</label>
                            <input type="checkbox" name="opt2" defaultChecked={props.visibleDict["objLst"]} onClick={() => props.visibleDict["objLst"] = !props.visibleDict["objLst"]}/>
                            <label for="opt2">&nbsp; Mis objetivos&emsp;&emsp;</label>
                            <input type="checkbox" name="opt3" defaultChecked={props.visibleDict["rmdLst"]} onClick={() => props.visibleDict["rmdLst"] = !props.visibleDict["rmdLst"]}/>
                            <label for="opt3">&nbsp; Mis recordatorios&emsp;&emsp;</label><br/><br/>
                            <input type="checkbox" name="opt4" defaultChecked={props.visibleDict["prjLst"]} onClick={() => props.visibleDict["prjLst"] = !props.visibleDict["prjLst"]}/>
                            <label for="opt4">&nbsp; Mis proyectos&emsp;&emsp;&emsp;&emsp;</label>
                            <input type="checkbox" name="opt5" defaultChecked={props.visibleDict["evtLst"]} onClick={() => props.visibleDict["evtLst"] = !props.visibleDict["evtLst"]}/>
                            <label for="opt5">&nbsp; Mis eventos&emsp;&emsp;</label>
                            <input type="checkbox" name="opt6" defaultChecked={props.visibleDict["mssLst"]} onClick={() => props.visibleDict["mssLst"] = !props.visibleDict["mssLst"]}/>
                            <label for="opt6">&nbsp; Mis mensajes&emsp;&emsp;&emsp;&emsp;</label><br/><br/>
                            <input type="checkbox" name="opt7" defaultChecked={props.visibleDict["atsLst"]} onClick={() => props.visibleDict["atsLst"] = !props.visibleDict["atsLst"]}/>
                            <label for="opt7">&nbsp; Actividades</label><br/>
                        </div>
                        <br/>
                        <input onClick={props.func} type="button" value="Aplicar" />
                    </form> 
                </div>
            </div>
        </>
    )
}

export default WidgetModal;