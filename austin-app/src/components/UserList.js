import React, { useEffect } from "react";
import UsersListe from "../sample/users.json";

function UserList({editUser, search}){


    // const count = new URLSearchParams(location.search).get("count");
    // if(count && count <UsersListe.length ) UsersListe.length = count;
 
    // const redactToUser = (id) =>{
    //     history.push(`users/${id}`);
    //    }

    const userDetail = UsersListe;

   const [filteredList, setfilteredList]  =React.useState(userDetail);

   useEffect(()=>{
    if(search){
        setfilteredList(userDetail.filter(({fname})=> fname.match(search)));
    }
    else{
        setfilteredList([...userDetail]);
    }
   }, [search]);
    
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
                    {filteredList.map(u => {
                        return (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>
                                    <img width="50%" src={u.avatar} className="avatar" />
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