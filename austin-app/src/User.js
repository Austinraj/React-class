import React from "react";

function User(propes){
    return(
        <div>
            <p>Name - {this.state.name}</p>
            <p>Age - {this.state.age}</p>
            <button onClick={this.Changed}>Change</button>
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