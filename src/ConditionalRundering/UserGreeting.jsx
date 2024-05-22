// Conditional Rundering 
// If the condition is true, the first block will be rendered, if the condition is false, the second block will be rendered
// allows you to control what get rendered in your application based on certain conditions (show , hide , or change components)

import ConditionalChild from "./ConditionalChilds/ConditionalChilds.jsx";

function UserGreeting () {


    const isLoggedIn = true;
    const name = 'Jack Jack';
    
    return (
        <>
           <ConditionalChild isLoggedIn = {isLoggedIn} name = {name} />
        </>
    )
}
export default UserGreeting;

