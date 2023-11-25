import React from "react";

import userList from "../sample/users.json";

function User({ match}){//Url Parameter
    const userId = match.params.id;
    const [user] = userList.filter(({id})=> id ==userId);

    if(!user) return <h1> User Not Found</h1>

    return(
        <>
        <p>First Name - {user.fname}</p>
        <p>Last Name - {user.lname}</p>
        <p>Email - {user.username}</p>
        </>
    )

}


export default User;