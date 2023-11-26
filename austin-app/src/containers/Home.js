import React from "react";

import Banner from "../components/Banner";
function Home({ history, location}){
    //goBack
    // goforward
    // push
    // replace
    
    const [count, setCount] = React.useState(0);

    const countRef = React.useRef(); // useRef Last decaler panna 2 CountRef use panna last iruka use pannum    // console.log(location);

    const inc = () => setCount(count + 1);
    const dec = () => setCount(count - 1);
    const res = () => setCount(0);

    const incRef = () =>{
         countRef.current.innerText = Number(countRef.current.innerText) +1;
    }
    const decRef = () =>{
         countRef.current.innerText = Number(countRef.current.innerText)  - 1;

    }
    const resRef = () =>{
        countRef.current.innerText = Number(countRef.current.innerText = 0);
         
    }

    return(
       <div className="carousel slide" data-be-ride="carousel">
        <br />
        <button className="btn btn-primary me-2" onClick={() => history.goBack()}>Go Back</button>
        <button className="btn btn-warning me-2" onClick={() => history.goForward()}>Go Forward</button>
        <button className="btn btn-warning me-2" onClick={() => history.push("/users")}>Go Users push</button>
        <button className="btn btn-danger" onClick={() => history.replace("/about")}>Go About Replace</button> 
        {/* history.replace  bank payment use pannlam */}
        <br /> <br />

        {/* useSate */}
        <h2>Counter - {count}</h2>
        <button className="btn btn-primary me-2" onClick={inc}>+</button>
        <button className="btn btn-warning me-2" onClick={dec}>-</button>
        <button className="btn btn-danger me-2" onClick={res}>0</button>
        <br />
        <br />
        {/* use Ref */}
        <h2>Counter - <span ref={countRef}>0</span></h2>
        <button className="btn btn-primary me-2" onClick={incRef}>+</button>
        <button className="btn btn-warning me-2" onClick={decRef}>-</button>
        <button className="btn btn-danger me-2" onClick={resRef}>0</button>

        <br />
        <br />
        <button className="btn btn-warning">See Banner</button>
        <Banner />
       </div>
    )
}

export default Home;

// Home => About => Contact => Users