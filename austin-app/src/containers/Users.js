import React from "react";

import UsersListe from "../sample/users.json";
function Users() {
    return (
        <div className="container-fluid">
            <div>
                <h1>Users</h1>
            </div>
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
                                    {UsersListe.map(u => {
                                        return (
                                            <tr>
                                                <td>{u.id}</td>
                                                <td>
                                                    <img width="50%" src={u.avatar} class="avatar" />
                                                </td>
                                                <td>{u.fname}</td>
                                                <td>{u.lname}</td>
                                                <td>{u.username}</td>
                                                <td>
                                                    <button class="btn btn-sm btn-primary">edit</button>
                                                    <button class="btn btn-sm btn-danger">Delete</button>
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
                            <form onSubmit="">
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
                </div>
            </div>
        </div>
    )
}

export default Users;