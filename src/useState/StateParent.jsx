import StateChild from "./StateChild";
import { useState } from "react";
function StateParent () {
   const counter = 0;
   const someState = 2;

    return (<>
    {/* <div>Hein Minn Aung</div> */}
     <StateChild counter={counter} someState={someState}  /> 
    </>)
}
export default StateParent;