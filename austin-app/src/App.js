import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import "./style.css";

// import Course from "./Course";

// import Users from "./User";

// import Counter from "./Counter";
import Navigation from "./components/Navigation";

 import Routing from "./components/Router";




function App() {
    return (
        <Router>
            <Navigation />
            <Routing />
        </Router>

    )
    // /home
    //  /about 
    // /users
}

export default App;























// // Looping
// function App(){ //App components
//     // function use panna must return 



//     // const course =[
//     //     {
//     //         name:"React",
//     //         des:"React for front-end"
//     //     },
//     //     {
//     //         name:"Java",
//     //         des:"for back-eJavand",
//     //     },
//     //     {
//     //         name:"JavaScript",
//     //         des:"javascript for front-end",
//     //     },
//     //     {
//     //         name:"Php",
//     //         des:"php for CRM",
//     //     }
//     // ]
//     return (

//     <div>
//         <p>hi Austin</p>
//         <Counter />
//     {/* <p >this is from react components </p>
//         <Users />
//         {course.map((respones)=>{
//             return <Course {...respones} />
//         })} */}
//     </div>);
// }




// one of the method

// function App(){ //App components
//     // function use panna must return 
//     return (

//     <div>

//     <p >this is from react components </p>
//         <Users />
//         <Course name="React" des="React for front-end" price={250} />
//         <Course name="Java" des="Java for back-end" />
//         <Course name="JavaScript" des="javascript for front-end"/>
//         <Course name="Php" des="php for CRM"/>
//     </div>);
// }


// import pannratha must export pannanum