import React from "react";

import UserList from "../components/UserList";

import UserForm from "../components/UserForm";


function Users() {
    // Example :
// query parameter => https://www.amazon.in/s?k=laptop
// Url parameter => https://www.amazon.in/dp/B0C3CNRQD1 

    const [user, setUser] = React.useState({});

    const editUser = (user) =>{
        setUser(user);

    }
  
    return (
        <>
        <select className="form-control" style={{width : 100}}>
            <option>--Select--</option>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        </select>

        <div className="container-fluid">
            <div>
                <h1>Users</h1>
            </div>
            <div className="row">
                <div className="col-sm-6">
                <UserList editUser={editUser}  />
                </div>
                <div className="col-sm-6">
                  <UserForm user={user} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Users;