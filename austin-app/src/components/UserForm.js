import React from "react";

function UserForm() {

    const [userForm, setUserForm] = React.useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        avatar: "",
    })

    const handChange  = ({target: {name , value}}) =>{
        setUserForm({...userForm, [name]: value}) 
        }
    const handelSubmit = (evt)=>{
        evt.preventDefault();
       createUsers();
    }

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
            response = await response.json();
         
           
        } catch(err){
            console.error(err);
        }
    }
    return (
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
    )
}

export default UserForm;