import React from "react";

import { Route } from "react-router-dom";


import Home from "../containers/Home";
import About from "../containers/About";
import Contact from "../containers/Contact";
import Login from "../containers/Login";
import Users from "../containers/Users";
import Register from "../containers/Register";


function Routing(){
    return(
      <>

<Route path="/home" component={Home} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
<Route path="/login" component={Login} />
<Route path="/users" component={Users} />
<Route path="/register" component={Register} />
      </>  
    )
}
export default Routing;