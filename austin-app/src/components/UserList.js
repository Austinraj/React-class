// Useing for axios method
import React, { useEffect } from "react";

import joi from "joi";

import { Formik, Field, Form, ErrorMessage, } from "formik";

import axios from "axios";

const userSchema = joi.object({
    fname: joi.string().min(6).max(12).required(),
    lname: joi.string().required(),
    username: joi.string().alphanum().required(),
    password: joi.string().alphanum().min(6).max(18).required(),
    email: joi.string().email({tlds:{allow: false}}).required(),
    avatar: joi.string().uri().required(),
});

// FORMIK for  = user form ka

//  joi for validation ka

const initial = {
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    avatar: "",
}


function UserList(){

    // const count = new URLSearchParams(location.search).get("count");
    // if(count && count <UsersListe.length ) UsersListe.length = count;
 
    // const redactToUser = (id) =>{
    //     history.push(`users/${id}`);
    //    }

    const API_URL = "https://www.melivecode.com/api/users";


    const [isLoder ,setIsLoder] = React.useState(true);
    const [userForm, setUserForm] = React.useState(initial);
    const [users, setUsers] = React.useState([]);


  

    // API Call

    // Get Users
    const getUsers = async () =>{
        try{
            let {data} = await axios.get(API_URL);    
            setUsers(data);
            setIsLoder(false);
        } catch(err){
            console.error(err);
        }
    }
    // Create Users
    const createUsers = async () =>{
        try{
            await axios.post(`${API_URL}/create`, userForm);
            setUserForm(initial)
            getUsers();
           
        } catch(err){
            console.error(err);
        }
    }
    // Update Users
    const updateUsers = async () =>{
        try{
             await axios.put(`${API_URL}/update`, userForm);
               
            setUserForm(initial);
            getUsers();
           
        } catch(err){
            console.error(err);
        }
    }
    // Delete Users
    const deleteUsers = async (id) =>{
      if(window.confirm(`Are you sure want to delete this users- ${id}?`)){
        try{
            await axios.delete(`${API_URL}/delete`, {id})
           
        } catch(err){
            console.error(err);
        }
      }
    }


    useEffect(()=>{
        getUsers();
        
    },[])

    const validate = (values)=>{
            const errors = {};

            const {error} =userSchema.validate(values);
        if(error){
            const [err] = error.details;
            errors[err.context.key] = err.message;

        }

        //     if(!values.fname){
        //      errors.fname = "first name is requried"
        //     }else if (!values.lname){
        //      errors.lname = "last name is requried"
        //     }else if (!values.username){
        //      errors.username = "User name is requried"
        //     }else if (!values.email){
        //      errors.email = "email is requried"
        //     }else if (!MAIL_FORMAT.test(values.email)){
        //      errors.email = "Email is invalid";
        //     }else if (!values.password){
        //      errors.password = "password is requried"
        //     }else if (!values.avatar){
        //      errors.avatar = "avatar  is requried"
        //     }

            return errors;
           }
    
    const handleSubmit =(values)=>{
     console.log("Submited", values);
      const {error} = userSchema.validate(values);
      if(!error){
        // API call
      }
           
            // try {
            //     const data = userSchema.validate(values);
            // }
            // catch(err){
            //     console.error(err);
            // }
          }
//     const userDetail = UsersListe;

//    const [filteredList, setfilteredList]  =React.useState(userDetail);

//    useEffect(()=>{
//     if(search){
//         setfilteredList(userDetail.filter(({fname})=> fname.match(search)));
//     }
//     else{
//         setfilteredList([...userDetail]);
//     }
//    }, [search]);
//     console.log("touched", touched);
//     console.log("Error",error);
//     console.log("uaer",userForm);
    return(
        <div className="row">
             <div className="col-sm-6">
        <div className="card">
        <div className="card-body">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Avatar</th>
                        <th>Fist Name</th>
                        <th>Last Name</th>
                        <th>UesrName</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="content">
                    {isLoder &&(
                        <div className="d-flex justify-content-center">
                        <div className="spinner-border text-secondary" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    )}
                    {users.map(u => {
                        return (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>
                                    <img width="50" src={u.avatar} className="avatar" />
                                </td>
                                <td>{u.fname}</td>
                                <td>{u.lname}</td>
                                <td>{u.username}</td>
                                <td>
                                    <button className="btn btn-sm btn-primary" onClick={() =>setUserForm({...u,password: "", email: u.username})}>edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={() =>deleteUsers(u.id)}>Delete</button>
                                    <button className="btn btn-sm btn-warning">View</button>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
            </div>
    </div>
    </div>
       <div className="col-sm-6">
    <div className="card">
    <div className="card-body">
    <Formik initialValues={initial}
          validate={validate}
          onSubmit={handleSubmit}>
            { ()=>{ return (
                                <Form className="mt-4"  >
                                 <div className="form-group">
                                    <label htmlFor="fname">First Name:</label>
                                    {/* <input type="text" className="form-control" id="fname" name="fname"
                                        placeholder="Enter Your First Name " value={values.fname} onChange={handleChange} onBlur={handleBlur} required />
                                        {touched.fname && (
                                        <span className="text-danger">{errors.fname}</span>
                                        )} */}
                                        <Field className="form-control"  name="fname" placeholder="Enter Your First Name "/>
                                        <ErrorMessage className="text-danger" name="fname" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lname">Last Name:</label>
                                    {/* <input type="text" className="form-control" id="lname" name="lname"
                                        placeholder="Enter Your Last Name" value={values.lname} onChange={handleChange} onBlur={handleBlur} required />
                                         {touched.lname && (
                                        <span className="text-danger">{errors.fname}</span>
                                        )} */}
                                        <Field className="form-control"  name="lname" placeholder="Enter Your Last Name"/>
                                        <ErrorMessage className="text-danger" name="lname" />

                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    {/* <input type="email" className="form-control" id="email" name="email"
                                        placeholder="Enter Your Email " value={values.email} onChange={handleChange} onBlur={handleBlur}required />
                                        {touched.email && (
                                        <span className="text-danger">{errors.fname}</span>
                                        )} */}
                                        <Field className="form-control" type="email"  name="email" placeholder="Enter Your Email "/>
                                        <ErrorMessage className="text-danger" name="email" />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">User Name:</label>
                                    {/* <input type="text" className="form-control" id="username" name="username"
                                        placeholder="Enter Your User Name" value={values.username} onChange={handleChange} onBlur={handleBlur} required />
                                        {touched.username && (
                                        <span className="text-danger">{errors.fname}</span>
                                        )} */}
                                        <Field className="form-control"  name="username" placeholder="Enter Your User Name"/>
                                        <ErrorMessage className="text-danger" name="username" />
                                        
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    {/* <input type="password" className="form-control" id="password" name="password"
                                        placeholder="Enter Your Password " value={values.password} onChange={handleChange} onBlur={handleBlur} required />
                                         {touched.password && (
                                        <span className="text-danger">{errors.fname}</span>
                                        )} */}
                                        <Field className="form-control" type="password" name="password" placeholder="Enter Your Password "/>
                                        <ErrorMessage className="text-danger" name="password" />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="avatar">Avatar:</label>
                                    {/* <input type="url" className="form-control" id="avatar" name="avatar"
                                        placeholder="Enter Your URL " value={values.avatar} onChange={handleChange} onBlur={handleBlur} required />
                                         {touched.avatar && (
                                        <span className="text-danger">{errors.fname}</span>
                                        )} */}
                                        <Field className="form-control" type="url" name="avatar" placeholder="Enter Your URL "/>
                                        <ErrorMessage className="text-danger" name="avatar" />

                                </div>
                                <div className="form-group m-3">
                                    <button type="reset" className="btn  btn-secondary">Reset</button>
                                    <button type="submit" className="btn btn-success">
                                        {
                                            userForm.id ? "Update" : "Create"
                                        }
                                    </button>
                                </div>
            
                            </Form>
                            )
                        }
                    }
              </Formik>
            </div>
        </div>


                 </div>
    </div>
    )
}
// two type validation form submit and filed validation
// but currently filed validation pannraga


export default UserList;



















// useing for fetch API method

// import React, { useEffect } from "react";



// function UserList(){

//     // const count = new URLSearchParams(location.search).get("count");
//     // if(count && count <UsersListe.length ) UsersListe.length = count;
 
//     // const redactToUser = (id) =>{
//     //     history.push(`users/${id}`);
//     //    }

    

//     const initial = {
//         fname: "",
//         lname: "",
//         username: "",
//         email: "",
//         password: "",
//         avatar: "",
//     }

//     const [isLoder ,setIsLoder] = React.useState(true);

//     const [users, setUsers] = React.useState([]);

//     const [userForm, setUserForm] = React.useState(initial)

//     const handChange  = ({target: {name , value}}) =>{
//         setUserForm({...userForm, [name]: value}) 
//         }
//     const handelSubmit = (evt)=>{
//         evt.preventDefault();
//         if(userForm.id){
//             updateUsers();
//         }else{
//        createUsers();
//         }
//     }

//     // API Call

//     // Get Users
//     const getUsers = async () =>{
//         try{
//             let response = await fetch("https://www.melivecode.com/api/users");
//             if(!response.ok){
//                 throw new Error("Request Failed");
//             }
//             response = await response.json();
//             setUsers(response);
//             setIsLoder(false);
//         } catch(err){
//             console.error(err);
//         }
//     }
//     // Create Users
//     const createUsers = async () =>{
//         try{
//             let response = await fetch("https://www.melivecode.com/api/users/create",{
//                 method: "POST",
//                 body: JSON.stringify(userForm),
//                 headers: {"Content-Type":"application/json"}
//             });
//             if(!response.ok){
//                 throw new Error("request failed")
//             }
//             // response = await response.json();
//             // console.log(userForm);
//             setUserForm(initial)
//             getUsers();
           
//         } catch(err){
//             console.error(err);
//         }
//     }
//     // Update Users
//     const updateUsers = async () =>{
//         try{
//             let response = await fetch("https://www.melivecode.com/api/users/update",{
//                 method: "PUT",
//                 body: JSON.stringify(userForm),
//                 headers: {"Content-Type":"application/json"}
//             });
//             if(!response.ok){
//                 throw new Error("request failed")
//             }
//             // response = await response.json();
//             // console.log(userForm);
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
//             let response = await fetch("https://www.melivecode.com/api/users/delete",{
//                 method: "DELETE",
//                 body: JSON.stringify({id}),
//                 headers: {"Content-Type":"application/json"}
//             });
//             if(!response.ok){
//                 throw new Error("request failed")
//             }
//             // response = await response.json();
//             // console.log(userForm);
//             getUsers();
           
//         } catch(err){
//             console.error(err);
//         }
//       } 
//       else{
        
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
//                             placeholder="Enter Your First Name " value={userForm.fname} onChange={handChange} required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="lname">Last Name:</label>
//                         <input type="text" className="form-control" id="lname" name="lname"
//                             placeholder="Enter Your Last Name" value={userForm.lname} onChange={handChange} required />
//                     </div>
                    
//                     <div className="form-group">
//                         <label htmlFor="email">Email:</label>
//                         <input type="email" className="form-control" id="email" name="email"
//                             placeholder="Enter Your Email " value={userForm.email} onChange={handChange} required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="username">User Name:</label>
//                         <input type="text" className="form-control" id="username" name="username"
//                             placeholder="Enter Your User Name" value={userForm.username} onChange={handChange} required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password:</label>
//                         <input type="password" className="form-control" id="password" name="password"
//                             placeholder="Enter Your Password " value={userForm.password} onChange={handChange} required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="avatar">Avatar:</label>
//                         <input type="text" className="form-control" id="avatar" name="avatar"
//                             placeholder="Enter Your URL " value={userForm.avatar} onChange={handChange} required />
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


// export default UserList;