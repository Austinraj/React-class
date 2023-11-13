import React from "react";

import Course from "./Course";

import Users from "./User";

function App(){ //App components
    // function use panna must return 
    return (
    
    <div>

    <p >this is from react components </p>
        <Users />
        <Course name="React" des="React for front-end" price={250} />
        <Course name="Java" des="Java for back-end" />
        <Course name="JavaScript" des="javascript for front-end"/>
        <Course name="Php" des="php for CRM"/>
    </div>);
}


// import pannratha must export pannanum

export default App;