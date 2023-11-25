import React from "react";

import Context, {AppContext } from "../Context";

function Test4(){// props drilling => overcome panna - Context

    const context = React.useContext(AppContext);
    // console.log("Test4", context )

    return(
        <>
        <h1>Test 4  components - {context}</h1>
        </>
       
    )
}

export default Test4;

// App => test1 => Test2 => Test3 => Test4