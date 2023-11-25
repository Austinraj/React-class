import React from "react";

export const AppContext = React.createContext({ name: "Austin"});

function Context(){
    // console.log(AppContext);
return(
    <h1>Hi</h1>
)
}


export default Context;