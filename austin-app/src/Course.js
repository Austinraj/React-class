import React from "react";


function Course(props) {//props red only // first parameter varum
    // props.name = "austin" => use panna mudiyathu
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.des}</p>
                <a href="#" className="btn btn-primary">Click here</a>
            </div>
        </div>
    )
}
// function -> props
// class -> this.

// Class basic components

// class Course extends React.Component {
//     render() {
//         console.log(this.props);
//         return (
//             <div className="card" >
//                 <div className="card-body">
//                     <h5 className="card-title">{this.props.name}</h5>
//                     <p className="card-text">{this.props.des}</p>
//                     <a href="#" className="btn btn-primary">Click here</a>
//                 </div>
//             </div>
//         )
//     }
// }

// onclick => onClick

// onblur => onBlur
// class =>className
export default Course;