import React from "react";

function UserForm({ user}) {
    return (
        <div className="card">
            <div className="card-body">
                <form >
                    <div className="form-group">
                        <label htmlFor="fname">First Name:</label>
                        <input type="text" className="form-control" id="fname" name="fname"
                            placeholder="Enter Your First Name " value={user.fname} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lname">Last Name:</label>
                        <input type="text" className="form-control" id="lname" name="lname"
                            placeholder="Enter Your Last Name" value={user.lname} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" name="email"
                            placeholder="Enter Your Email " value={user.username} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="avatar">Avatar:</label>
                        <input type="text" className="form-control" id="avatar" name="avatar"
                            placeholder="Enter Your URL " value={user.avatar} required />
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