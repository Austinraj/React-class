import React from "react";

function Banner(props) {
    console.log(props)
    return (
        <div className="carousel-inner">
            <div className="carousel-item active">
                <a href="">
                    <img src="/images/banner.webp" className="b-block w-100" alt="Guvi banner" />
                </a>
            </div>
        </div>
    )
}

export default Banner;