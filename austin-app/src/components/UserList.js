import React, { useEffect } from "react";
import UsersListe from "../sample/users.json";

function UserList({editUser, search}){


    // const count = new URLSearchParams(location.search).get("count");
    // if(count && count <UsersListe.length ) UsersListe.length = count;
 
    // const redactToUser = (id) =>{
    //     history.push(`users/${id}`);
    //    }

    const [isLoder ,setIsLoder] = React.useState(true);

    const [users, setUsers] = React.useState([]);

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
    )
}


export default UserList;