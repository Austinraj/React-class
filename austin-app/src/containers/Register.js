import React from "react";


function Register(){
    return(
        <div className="container mt-5 row">
        <div className="col-sm-4"></div>
        <div className="col-sm-6">


            <div className="card">
                <div className="card-body">

                    <form action="./index.html" >
                        <h2 className="text-align-center">Register</h2>
                        <div className="form-group">
                            <label htmlFor="fname">First Name:</label>
                            <input type="text" className="form-control" id="fname" name="fname"
                                placeholder="Enter Your First Name"
                                // value={form.firstName}
                                // onChange={({target: {value}})=> setValue({...form, firstName: value})}
                                required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lname">Last Name:</label>
                            <input type="text" className="form-control" id="lname" name="lname"
                                placeholder="Enter Your Last Name" 
                                // value={form.lastName}
                                // onChange={({target: {value}})=> setValue({...form, lastName: value})}
                                required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" name="email"
                                placeholder="Enter Your Email "
                                // value={form.Email}
                                // onChange={({target: {value}})=> setValue({...form, Email: value})}
                                required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass">Password:</label>
                            <input type="password" className="form-control" id="pass" name="pass"
                                placeholder="Enter Your URL " 
                                // value={form.Avatar}
                                // onChange={({target: {value}})=> setValue({...form, Avatar: value})}
                                required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="conpass">Confirm Password:</label>
                            <input type="password" className="form-control" id="conpass" name="conpass"
                                placeholder="Enter Your URL " 
                                // value={form.Avatar}
                                // onChange={({target: {value}})=> setValue({...form, Avatar: value})}
                                required />
                        </div>
                        <div className="form-group m-3">
                            <button type="reset" className="btn btn-secondary me-2">Reset</button>
                            <button type="submit" className="btn btn-success">Register</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Register;