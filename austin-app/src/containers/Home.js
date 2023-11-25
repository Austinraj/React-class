import React from "react";
function Home({ history, location}){
    //goBack
    // goforward
    // push
    // replace
    

    // console.log(location);
    return(
       <div className="carousel slide" data-be-ride="carousel">
        <br />
        <button className="btn btn-primary me-2" onClick={() => history.goBack()}>Go Back</button>
        <button className="btn btn-warning me-2" onClick={() => history.goForward()}>Go Forward</button>
        <button className="btn btn-warning me-2" onClick={() => history.push("/users")}>Go Users push</button>
        <button className="btn btn-danger" onClick={() => history.replace("/about")}>Go About Replace</button> 
        {/* history.replace  bank payment use pannlam */}
        <br /> <br />
        <div className="carousel-inner">
        <div className="carousel-item active">
        <a href="">
            <img src="/images/banner.webp" className="b-block w-100" alt="Guvi banner" />
        </a>
        </div>
        </div>
       </div>
    )
}

export default Home;

// Home => About => Contact => Users