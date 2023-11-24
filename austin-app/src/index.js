// Before React 18

// import React from "react"; 
// import ReactDom from "react-dom";

// import "./style.css"; //css import panrom

// import App from "./App";



// // 2 argument irukum .render(); 
// ReactDom.render(<App />, document.getElementById("app"));


// React 18
import React from "react";
import { createRoot} from "react-dom/client";

import "./style.css"; //css import panrom

import App from "./App";

const root = createRoot(document.getElementById("app"));

root.render(<App />);



// basic setup of react.js

// Prototype - Template , Blueprint






// // const formReduces =(form,{target: {name, value}})=>{
// //     return {...form, [name]: value};
// // };

// function Counter() {
//     const [form, setValue] = useState({
//         firstName: "",
//         lastName: "",
//         Email: "",
//         Avatar: ""
//     });
//     // const [form,dispatch] = useReducer(formReduces, {
//     //     firstName: "",
//     //     lastName: "",
//     //     Email: "",
//     //     Avatar: "" 
//     // });

//     const handChange= ({ target: {name, value}}) =>{
//         setValue({ ...form, [name]: value});
//         // console.log(name, value);
//     }

//     const submitForm = (evt) =>{
//         evt.preventDefault();
//         console.log(form)
//     }
//     return (
//         <div className="container mt-5 row">
//             <div className="col-sm-4"></div>
//             <div className="col-sm-6">


//                 <div className="card">
//                     <div className="card-body">

//                         <form action="./index.html" onSubmit={submitForm}>
//                             <div className="form-group">
//                                 <label htmlFor="fname">First Name:</label>
//                                 <input type="text" className="form-control" id="fname" name="fname"
//                                     placeholder="Enter Your First Name"
//                                     value={form.firstName}
//                                     onChange={handChange}
//                                     required />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="lname">Last Name:</label>
//                                 <input type="text" className="form-control" id="lname" name="lname"
//                                     placeholder="Enter Your Last Name" 
//                                     value={form.lastName}
//                                     onChange={handChange}
//                                     required />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="email">Email:</label>
//                                 <input type="email" className="form-control" id="email" name="email"
//                                     placeholder="Enter Your Email "
//                                     value={form.Email}
//                                     onChange={handChange}
//                                     required />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="avatar">Avatar:</label>
//                                 <input type="text" className="form-control" id="avatar" name="avatar"
//                                     placeholder="Enter Your URL " 
//                                     value={form.Avatar}
//                                     onChange={handChange}
//                                     required />
//                             </div>
//                             <div className="form-group m-3">
//                                 <button type="reset" className="btn btn-secondary">Reset</button>
//                                 <button type="submit" className="btn btn-success">submit</button>
//                             </div>

//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }