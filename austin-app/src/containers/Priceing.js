import React from "react";

import PriceList from "../sample/price.json";

function Priceing() {
    // {name,symbol,price,years,facility, btn}
    return (
        <section className="pricing py-5">
          <div className="container">
            <div className="row"> 
             {PriceList.map(({name,symbol,price,years,facility, btn})  =>{
                return(<div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                    <div className="card-body">
                        <h5 className="card-title text-muted text-uppercase text-center">{name}</h5>
                        <h6 className="card-price text-center">{symbol}{price}<span className="period">/{years}</span></h6>
                        <hr />
                        <ul className="fa-ul">
                            {facility.map(({name,acess})=>{
                              return(  acess ? <li><span className="fa-li"><i className="fas fa-check"></i></span>{name}</li>
                                : <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{name}
                                </li>)
                            })}
                            
                        </ul>
                     <div className="d-grid">
                            <a href="#" className="btn btn-primary text-uppercase" onClick={() =>{btn(name)}}>Buy</a>
                            {/* onClcik ={btn} => event print agum
                                but onClick ={ () =>btn(name)} => output or name value varm
                        */}
                        </div> 
                    </div>
                </div>
            </div>)})}
        
        </div>
          </div>
        </section>
    )

}

export default Priceing;