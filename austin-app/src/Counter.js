import React,{Component} from "react";

// 
// React => Component


// React lifecycle methods
// Mounting, Updating, Unmounting
class Counter extends Component(){
    constructor(props){
        super(props);
        this.state ={
            count: 0,
            message: "Austin",
        };

    }
    increment = () =>{
        this.setstate({count: this.state.count + 1});
    }
    decrment = () =>{
        this.setstate({count: this.state.count - 1});
    }
    reset = () =>{
        this.setstate({count: 0});
    }
    // one time DidMount call agum
    componentDidMount(){//Api Class ka use pannurom
        //Initial  Api Calls  

    }//modification panna use pannurom didMount

    componentDidUpdate(){// setstate change agum pothu DidUpdate call agum
    // Api call 
    }//

    // class base only
    ComponentWillUnmount(){//UI irukthu remove gum pothu WillUnmount call agum
    //  cleanup things use panurom
    }


    shouldComponentUpdate(){// update pannuma yes or no sollanum
        // true or flase
        return true;
    }
    render(){
        return(
            <>
            <p>Count - {this.state.count}</p>
            <p></p>
            <button onClick={this.increment}>+</button>{" "}
            <button onClick={this.decrment}>-</button>{" "}
            <button onClick={this.reset}>0</button>{" "}
            </>
        )
    }

}
// <Counter />
// const counter = new Counter({name: "tamil", city: "Chennai"});
// counter
export default Counter;