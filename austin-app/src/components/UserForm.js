import React from "react";

function UserForm(){
    return(
 <div className="card">
                        <div className="card-body">
                            <form >
                                <div className="form-group">
                                    <label htmlFor="fname">First Name:</label>
                                    <input type="text" className="form-control" id="fname" name="fname"
                                        placeholder="Enter Your First Name " required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lname">Last Name:</label>
                                    <input type="text" className="form-control" id="lname" name="lname"
                                        placeholder="Enter Your Last Name " required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" id="email" name="email"
                                        placeholder="Enter Your Email " required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="avatar">Avatar:</label>
                                    <input type="text" className="form-control" id="avatar" name="avatar"
                                        placeholder="Enter Your URL " required />
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