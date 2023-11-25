import React from "react";

import {  Route, Switch, Redirect } from "react-router-dom";


import Home from "../containers/Home";
import Navigation from "../components/Navigation";
import About from "../containers/About";
import Contact from "../containers/Contact";
import Priceing from "../containers/Priceing";
import Login from "../containers/Login";
import User from "../containers/User";
import Users from "../containers/Users";
import Register from "../containers/Register";

// function Home2(){
//     return <h2>Home2 page</h2>
// }

function Routing() {
    return (
        <Switch> 
{/* Switch first match agurtha display pannum */}
            
            {/* <Route path="/" component={Navigation}   /> */}
            {/* <Route path="/home/austin" render={()=>{
                return(
                    <h2>Home2 page</h2>
                )
            }} /> */}
            <Route path="/" component={Home} exact />
            <Route path="/home">
            <Redirect to="/" />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/priceing" component={Priceing} />
            <Route path="/login" component={Login} />
            
            <Route path="/users/:id" component={User} />
            <Route path="/users" component={Users} />
            <Route path="/register" component={Register} />
            <Route path="*" render={() => 
            <h2>404 Page Not Found</h2>
            } />

            
        </Switch>
    )
}
export default Routing;

// HashRouter -> #/
//      ^
//      |
// BrowserRouter;   Route - path, component, render , exact; Switch ; macth