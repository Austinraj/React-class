import React from "react";

// import Course from "./Course";

// import Users from "./User";

// import Counter from "./Counter";

import Home from "./containers/Home";
import Navigation from "./components/Navigation";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Login from "./containers/Login";
import Users from "./containers/Users";
import Register from "./containers/Register";



function App(){
    return(
        <>
        <Navigation />
        <Home />
        <About />
        <Contact />
        <Login />
        <Users />
        <Register />
        </>
    )
    // /home
    //  /about 
    // /users
}




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

export default App;