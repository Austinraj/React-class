import React, { useContext } from "react";

import { BrowserRouter as Router } from "react-router-dom";
// import "./style.css";

// import Course from "./Course";

// import Users from "./User";

// import Counter from "./Counter";
import Navigation from "./components/Navigation";

 import Routing from "./components/Router";

 import Test from "./components/Test";

 import Context,{AppContext} from "./Context";

 import  { ThemeContext1 } from "./Context";

 import { ThemeContext } from "./Context";

//  Default export => default irukaa serach pannum
//  Named export => export const name = "austin"; that correct name only use panna mudiyum

function App() {
    // const [count, setCount] = React.useState(0);

    const theme = useContext(ThemeContext);
    console.log(theme);

    return (
//         <AppContext.Provider value={count}>
//         <h2>App components -  {count}</h2>
//         <button onClick={()=> setCount(count +1)}>+</button>{" "}
//         <button onClick={()=> setCount(count - 1)}>-</button>{" "}
//         <button onClick={()=> setCount(0)}>0</button>
//         <Test />

// <Context />   
            <ThemeContext1>    
             <Router>
                {/* <div style={theme && theme.theme === "light" ? {backgroundColor: "white", color: "black"} : {backgroundColor:"black", color:"white"}}> */}
            <Navigation>
                <h1>Hi guvi</h1>
            </Navigation>
            <Routing />
            {/* </div> */}
           </Router>
           </ThemeContext1> 
        // </AppContext.Provider>
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