import React from "react";


function Login(){
    return(
        <div className="container mt-5 row">
            <div className="col-sm-4"></div>
            <div className="col-sm-6">


                <div className="card">
                    <div className="card-body">

                        <form action="./index.html" >
                            <h2>Login</h2>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form-control" id="email" name="email"
                                    placeholder="Enter Your Email "
                                    // value={form.Email}
                                    // onChange={({target: {value}})=> setValue({...form, Email: value})}
                                    required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="avatar">Password:</label>
                                <input type="password" className="form-control" id="avatar" name="avatar"
                                    placeholder="Enter Your URL " 
                                    // value={form.Avatar}
                                    // onChange={({target: {value}})=> setValue({...form, Avatar: value})}
                                    required />
                            </div>
                            <div className="form-group m-3">
                                <button type="reset" className="btn btn-secondary me-2">Reset</button>
                                <button type="submit" className="btn btn-success">Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;