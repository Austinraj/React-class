import React,{Component} from "react";

// 
// React => Component
class Counter extends Component(){
    constructor(props){
        super(props);
        this.state ={
            count: 0,
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
    render(){
        return(
            <>
            <p>Count - {this.state.count}</p>
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