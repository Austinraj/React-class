import React, { useEffect } from "react";
import UsersListe from "../sample/users.json";

function UserList({editUser, search}){

    // const count = new URLSearchParams(location.search).get("count");
    // if(count && count <UsersListe.length ) UsersListe.length = count;
 
    // const redactToUser = (id) =>{
    //     history.push(`users/${id}`);
    //    }

    const initial = {
        fname: "",
        lname: "",
        username: "",
        email: "",
        password: "",
        avatar: "",
    }

    const [isLoder ,setIsLoder] = React.useState(true);

    const [users, setUsers] = React.useState([]);

    const [userForm, setUserForm] = React.useState(initial)

    const handChange  = ({target: {name , value}}) =>{
        setUserForm({...userForm, [name]: value}) 
        }
    const handelSubmit = (evt)=>{
        evt.preventDefault();
       createUsers();
    }

    // API Call

    // Get Users
    const getUsers = async () =>{
        try{
            let response = await fetch("https://www.melivecode.com/api/users");
            if(!response.ok){
                throw new Error("Request Failed");
            }
            response = await response.json();
            setUsers(response);
            setIsLoder(false);
        } catch(err){
            console.error(err);
        }
    }
    // Create Users
    const createUsers = async () =>{
        try{
            let response = await fetch("https://www.melivecode.com/api/users/create",{
                method: "POST",
                body: JSON.stringify(userForm),
                headers: {"Content-Type":"application/json"}
            });
            if(!response.ok){
                throw new Error("request failed")
            }
            // response = await response.json();
            // console.log(userForm);
            setUserForm(initial)
            getUsers();
           
        } catch(err){
            console.error(err);
        }
    }
    // Update Users
    const updateUsers = async () =>{

    }
    // Delete Users
    const deleteUsers = async () =>{

    }


    useEffect(()=>{
        getUsers();
        
    },[])


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
                        <th>Email</th>
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
                                    <button className="btn btn-sm btn-primary" onClick={() =>editUser(u)}>edit</button>
                                    <button className="btn btn-sm btn-danger">Delete</button>
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
                <form onSubmit={handelSubmit} >
                    <div className="form-group">
                        <label htmlFor="fname">First Name:</label>
                        <input type="text" className="form-control" id="fname" name="fname"
                            placeholder="Enter Your First Name " value={userForm.fname} onChange={handChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lname">Last Name:</label>
                        <input type="text" className="form-control" id="lname" name="lname"
                            placeholder="Enter Your Last Name" value={userForm.lname} onChange={handChange} required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" name="email"
                            placeholder="Enter Your Email " value={userForm.email} onChange={handChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">User Name:</label>
                        <input type="text" className="form-control" id="username" name="username"
                            placeholder="Enter Your User Name" value={userForm.username} onChange={handChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" name="password"
                            placeholder="Enter Your Password " value={userForm.password} onChange={handChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="avatar">Avatar:</label>
                        <input type="text" className="form-control" id="avatar" name="avatar"
                            placeholder="Enter Your URL " value={userForm.avatar} onChange={handChange} required />
                    </div>
                    <div className="form-group m-3">
                        <button type="reset" className="btn  btn-secondary">Reset</button>
                        <button type="submit" className="btn btn-success">submit</button>
                    </div>

                </form>
            </div>
        </div>


                 </div>
    </div>
    )
}


export default UserList;