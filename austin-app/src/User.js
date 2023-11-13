import React from "react";

function Users(){
    const [name, setName] = React.useState("guvi"); // React Hooks  => use start pannurtu
    const [age, setAge] = React.useState(21);
    const [city, setCity] = React.useState("chennai");

    const Changed = () =>{
        setName("Austin")
    }

    return(
        <div>
            <p>Name - {name}</p>
            <p>Age - {age}</p>
            <p>City - {city}</p>
            <button onClick={Changed}>Change</button>
        </div>
    )
}









// class Users extends React.Component{
//     constructor(propes){
//         super(propes)
//         this.state ={
//             name: "guvi",
//             age: "21",
//         }
//     }

//     Changed = ()=>{
//         console.log("changed");
//         this.setState({ name: "Austin"});
//     }

//     render(){
//         return(
//             <div>
//                 <p>Name - {this.state.name}</p>
//                 <p>Age - {this.state.age}</p>
//                 <button onClick={this.Changed}>Change</button>
//             </div>
//         )
//     }
// }


export default Users;