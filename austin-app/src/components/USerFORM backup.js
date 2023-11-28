// // Useing for axios method
// import React, { useEffect } from "react";

// import axios from "axios";

//  // FORMIK for  = user form ka

//  joi for validation ka

// function UserList(){

//     // const count = new URLSearchParams(location.search).get("count");
//     // if(count && count <UsersListe.length ) UsersListe.length = count;
 
//     // const redactToUser = (id) =>{
//     //     history.push(`users/${id}`);
//     //    }

//     const API_URL = "https://www.melivecode.com/api/users";

//     const initial = {
//         fname: "",
//         lname: "",
//         username: "",
//         email: "",
//         password: "",
//         avatar: "",
//     }

//     const MAIL_FORMAT = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

//     const URL_FORMAT = new RegExp("(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})")

//     const PASSWORD_FORMAT = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")

//     const [isLoder ,setIsLoder] = React.useState(true);

//     const [users, setUsers] = React.useState([]);

//     const [userForm, setUserForm] = React.useState(initial)

//     const [error, setError] = React.useState(initial);

//     const [touched, setTouched] = React.useState(initial);

//     const handBurl = ({target: {name}}) =>{
//     setTouched({  ...touched, [name]: true});

//     }

//     const handChange  = ({target: {name , value}}) =>{
//         // console.log(name ,value);
//         const err = { ...error};

//         switch(name){
//             case "fname":{
//                 if(!value){
//                     err.fname = "First name is required"
//                 }else{
//                     err.fname = "";
//                 }
//                 break;
//             }
//             case "lname":{
//                 if(!value){
//                     err.lname = "Last name is required"
//                 }else{
//                     err.lname = "";
//                 }
//                 break;
//             }
//             case "username":{
//                 if(!value){
//                     err.username = "User name is required"
//                 }else{
//                     err.username = "";
//                 }
//                 break;
//             }
//             case "password":{
//                 if(!value){
//                     err.password = "Password is required"
//                 }else if(!PASSWORD_FORMAT.test(value)){
//                     err.password = "Password is invalid"
//                 }else{
//                     err.password = "";
//                 }
//                 break;
//             }
//             case "email":{
//                 if(!value){
//                     err.email = "Email  is required"
//                 }else if(!MAIL_FORMAT.test(value)){
//                     err.email = "Email is invalid"
//                 }else{
//                     err.email = "";
//                 }
//                 break;
//             }
//             case "avatar":{
//                 if(!value){
//                     err.avatar = "Avatar is required"
//                 }else if(!URL_FORMAT.test(value)){
//                     err.avatar = "Avatar URL is invalid"
//                 }
//                 else{
//                     err.avatar = "";
//                 }
//                 break;
//             }
//         }
       
//         setError(err);
//         // console.log(err);


//         setUserForm({...userForm, [name]: value}) 
//         }



    
//     const handelSubmit = (evt)=>{
//         evt.preventDefault();
//         const isTouched = Object.values(touched).every(t => t === true ); // t === true
//         const isNotError = Object.values(error).every(t => t === "");

//         if(isTouched && isNotError){
//             if(userForm.id){
//                 updateUsers();
//             }else{
//            createUsers();
//             }
//         }
//     }

//     // API Call

//     // Get Users
//     const getUsers = async () =>{
//         try{
//             let {data} = await axios.get(API_URL);    
//             setUsers(data);
//             setIsLoder(false);
//         } catch(err){
//             console.error(err);
//         }
//     }
//     // Create Users
//     const createUsers = async () =>{
//         try{
//             await axios.post(`${API_URL}/create`, userForm);
//             setUserForm(initial)
//             getUsers();
           
//         } catch(err){
//             console.error(err);
//         }
//     }
//     // Update Users
//     const updateUsers = async () =>{
//         try{
//              await axios.put(`${API_URL}/update`, userForm);
               
//             setUserForm(initial);
//             getUsers();
           
//         } catch(err){
//             console.error(err);
//         }
//     }
//     // Delete Users
//     const deleteUsers = async (id) =>{
//       if(window.confirm(`Are you sure want to delete this users- ${id}?`)){
//         try{
//             await axios.delete(`${API_URL}/delete`, {id})
           
//         } catch(err){
//             console.error(err);
//         }
//       }
//     }


//     useEffect(()=>{
//         getUsers();
        
//     },[])


// //     const userDetail = UsersListe;

// //    const [filteredList, setfilteredList]  =React.useState(userDetail);

// //    useEffect(()=>{
// //     if(search){
// //         setfilteredList(userDetail.filter(({fname})=> fname.match(search)));
// //     }
// //     else{
// //         setfilteredList([...userDetail]);
// //     }
// //    }, [search]);
// //     console.log("touched", touched);
// //     console.log("Error",error);
// //     console.log("uaer",userForm);
//     return(
//         <div className="row">
//              <div className="col-sm-6">
//         <div className="card">
//         <div className="card-body">
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Avatar</th>
//                         <th>Fist Name</th>
//                         <th>Last Name</th>
//                         <th>UesrName</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody id="content">
//                     {isLoder &&(
//                         <div className="d-flex justify-content-center">
//                         <div className="spinner-border text-secondary" role="status">
//                           <span className="sr-only">Loading...</span>
//                         </div>
//                       </div>
//                     )}
//                     {users.map(u => {
//                         return (
//                             <tr key={u.id}>
//                                 <td>{u.id}</td>
//                                 <td>
//                                     <img width="50" src={u.avatar} className="avatar" />
//                                 </td>
//                                 <td>{u.fname}</td>
//                                 <td>{u.lname}</td>
//                                 <td>{u.username}</td>
//                                 <td>
//                                     <button className="btn btn-sm btn-primary" onClick={() =>setUserForm({...u,password: "", email: u.username})}>edit</button>
//                                     <button className="btn btn-sm btn-danger" onClick={() =>deleteUsers(u.id)}>Delete</button>
//                                     <button className="btn btn-sm btn-warning">View</button>
//                                 </td>
//                             </tr>
//                         )
//                     })}


//                 </tbody>
//             </table>
//             </div>
//     </div>
//     </div>
//             <div className="col-sm-6">
//             <div className="card">
//             <div className="card-body">
//                 <form onSubmit={handelSubmit} >
//                     <div className="form-group">
//                         <label htmlFor="fname">First Name:</label>
//                         <input type="text" className="form-control" id="fname" name="fname"
//                             placeholder="Enter Your First Name " value={userForm.fname} onChange={handChange} onBlur={handBurl} required />
//                             <span className="text-danger">{error.fname}</span>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="lname">Last Name:</label>
//                         <input type="text" className="form-control" id="lname" name="lname"
//                             placeholder="Enter Your Last Name" value={userForm.lname} onChange={handChange} onBlur={handBurl} required />
//                             <span className="text-danger">{error.lname}</span>
//                     </div>
                    
//                     <div className="form-group">
//                         <label htmlFor="email">Email:</label>
//                         <input type="email" className="form-control" id="email" name="email"
//                             placeholder="Enter Your Email " value={userForm.email} onChange={handChange} onBlur={handBurl}required />
//                             <span className="text-danger">{error.email}</span>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="username">User Name:</label>
//                         <input type="text" className="form-control" id="username" name="username"
//                             placeholder="Enter Your User Name" value={userForm.username} onChange={handChange} onBlur={handBurl} required />
//                             <span className="text-danger">{error.username}</span>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password:</label>
//                         <input type="password" className="form-control" id="password" name="password"
//                             placeholder="Enter Your Password " value={userForm.password} onChange={handChange} onBlur={handBurl} required />
//                             <span className="text-danger">{error.password}</span>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="avatar">Avatar:</label>
//                         <input type="text" className="form-control" id="avatar" name="avatar"
//                             placeholder="Enter Your URL " value={userForm.avatar} onChange={handChange} onBlur={handBurl} required />
//                             <span className="text-danger">{error.avatar}</span>
//                     </div>
//                     <div className="form-group m-3">
//                         <button type="reset" className="btn  btn-secondary">Reset</button>
//                         <button type="submit" className="btn btn-success">
//                             {
//                                 userForm.id ? "Update" : "Create"
//                             }
//                         </button>
//                     </div>

//                 </form>
//             </div>
//         </div>


//                  </div>
//     </div>
//     )
// }
// // two type validation form submit and filed validation
// // but currently filed validation pannraga


// export default UserList;



















// // useing for fetch API method

// // import React, { useEffect } from "react";



// // function UserList(){

// //     // const count = new URLSearchParams(location.search).get("count");
// //     // if(count && count <UsersListe.length ) UsersListe.length = count;
 
// //     // const redactToUser = (id) =>{
// //     //     history.push(`users/${id}`);
// //     //    }

    

// //     const initial = {
// //         fname: "",
// //         lname: "",
// //         username: "",
// //         email: "",
// //         password: "",
// //         avatar: "",
// //     }

// //     const [isLoder ,setIsLoder] = React.useState(true);

// //     const [users, setUsers] = React.useState([]);

// //     const [userForm, setUserForm] = React.useState(initial)

// //     const handChange  = ({target: {name , value}}) =>{
// //         setUserForm({...userForm, [name]: value}) 
// //         }
// //     const handelSubmit = (evt)=>{
// //         evt.preventDefault();
// //         if(userForm.id){
// //             updateUsers();
// //         }else{
// //        createUsers();
// //         }
// //     }

// //     // API Call

// //     // Get Users
// //     const getUsers = async () =>{
// //         try{
// //             let response = await fetch("https://www.melivecode.com/api/users");
// //             if(!response.ok){
// //                 throw new Error("Request Failed");
// //             }
// //             response = await response.json();
// //             setUsers(response);
// //             setIsLoder(false);
// //         } catch(err){
// //             console.error(err);
// //         }
// //     }
// //     // Create Users
// //     const createUsers = async () =>{
// //         try{
// //             let response = await fetch("https://www.melivecode.com/api/users/create",{
// //                 method: "POST",
// //                 body: JSON.stringify(userForm),
// //                 headers: {"Content-Type":"application/json"}
// //             });
// //             if(!response.ok){
// //                 throw new Error("request failed")
// //             }
// //             // response = await response.json();
// //             // console.log(userForm);
// //             setUserForm(initial)
// //             getUsers();
           
// //         } catch(err){
// //             console.error(err);
// //         }
// //     }
// //     // Update Users
// //     const updateUsers = async () =>{
// //         try{
// //             let response = await fetch("https://www.melivecode.com/api/users/update",{
// //                 method: "PUT",
// //                 body: JSON.stringify(userForm),
// //                 headers: {"Content-Type":"application/json"}
// //             });
// //             if(!response.ok){
// //                 throw new Error("request failed")
// //             }
// //             // response = await response.json();
// //             // console.log(userForm);
// //             setUserForm(initial);
// //             getUsers();
           
// //         } catch(err){
// //             console.error(err);
// //         }
// //     }
// //     // Delete Users
// //     const deleteUsers = async (id) =>{
// //       if(window.confirm(`Are you sure want to delete this users- ${id}?`)){
// //         try{
// //             let response = await fetch("https://www.melivecode.com/api/users/delete",{
// //                 method: "DELETE",
// //                 body: JSON.stringify({id}),
// //                 headers: {"Content-Type":"application/json"}
// //             });
// //             if(!response.ok){
// //                 throw new Error("request failed")
// //             }
// //             // response = await response.json();
// //             // console.log(userForm);
// //             getUsers();
           
// //         } catch(err){
// //             console.error(err);
// //         }
// //       } 
// //       else{
        
// //       }
// //     }


// //     useEffect(()=>{
// //         getUsers();
        
// //     },[])


// // //     const userDetail = UsersListe;

// // //    const [filteredList, setfilteredList]  =React.useState(userDetail);

// // //    useEffect(()=>{
// // //     if(search){
// // //         setfilteredList(userDetail.filter(({fname})=> fname.match(search)));
// // //     }
// // //     else{
// // //         setfilteredList([...userDetail]);
// // //     }
// // //    }, [search]);
    
// //     return(
// //         <div className="row">
// //              <div className="col-sm-6">
// //         <div className="card">
// //         <div className="card-body">
// //             <table className="table">
// //                 <thead>
// //                     <tr>
// //                         <th>#</th>
// //                         <th>Avatar</th>
// //                         <th>Fist Name</th>
// //                         <th>Last Name</th>
// //                         <th>UesrName</th>
// //                         <th>Action</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody id="content">
// //                     {isLoder &&(
// //                         <div className="d-flex justify-content-center">
// //                         <div className="spinner-border text-secondary" role="status">
// //                           <span className="sr-only">Loading...</span>
// //                         </div>
// //                       </div>
// //                     )}
// //                     {users.map(u => {
// //                         return (
// //                             <tr key={u.id}>
// //                                 <td>{u.id}</td>
// //                                 <td>
// //                                     <img width="50" src={u.avatar} className="avatar" />
// //                                 </td>
// //                                 <td>{u.fname}</td>
// //                                 <td>{u.lname}</td>
// //                                 <td>{u.username}</td>
// //                                 <td>
// //                                     <button className="btn btn-sm btn-primary" onClick={() =>setUserForm({...u,password: "", email: u.username})}>edit</button>
// //                                     <button className="btn btn-sm btn-danger" onClick={() =>deleteUsers(u.id)}>Delete</button>
// //                                     <button className="btn btn-sm btn-warning">View</button>
// //                                 </td>
// //                             </tr>
// //                         )
// //                     })}


// //                 </tbody>
// //             </table>
// //             </div>
// //     </div>
// //     </div>
// //             <div className="col-sm-6">
// //             <div className="card">
// //             <div className="card-body">
// //                 <form onSubmit={handelSubmit} >
// //                     <div className="form-group">
// //                         <label htmlFor="fname">First Name:</label>
// //                         <input type="text" className="form-control" id="fname" name="fname"
// //                             placeholder="Enter Your First Name " value={userForm.fname} onChange={handChange} required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="lname">Last Name:</label>
// //                         <input type="text" className="form-control" id="lname" name="lname"
// //                             placeholder="Enter Your Last Name" value={userForm.lname} onChange={handChange} required />
// //                     </div>
                    
// //                     <div className="form-group">
// //                         <label htmlFor="email">Email:</label>
// //                         <input type="email" className="form-control" id="email" name="email"
// //                             placeholder="Enter Your Email " value={userForm.email} onChange={handChange} required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="username">User Name:</label>
// //                         <input type="text" className="form-control" id="username" name="username"
// //                             placeholder="Enter Your User Name" value={userForm.username} onChange={handChange} required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="password">Password:</label>
// //                         <input type="password" className="form-control" id="password" name="password"
// //                             placeholder="Enter Your Password " value={userForm.password} onChange={handChange} required />
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="avatar">Avatar:</label>
// //                         <input type="text" className="form-control" id="avatar" name="avatar"
// //                             placeholder="Enter Your URL " value={userForm.avatar} onChange={handChange} required />
// //                     </div>
// //                     <div className="form-group m-3">
// //                         <button type="reset" className="btn  btn-secondary">Reset</button>
// //                         <button type="submit" className="btn btn-success">
// //                             {
// //                                 userForm.id ? "Update" : "Create"
// //                             }
// //                         </button>
// //                     </div>

// //                 </form>
// //             </div>
// //         </div>


// //                  </div>
// //     </div>
// //     )
// // }


// // export default UserList;