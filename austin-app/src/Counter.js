import React,{Component,useState,useEffect} from "react";


//useEffect React Hooks
function Counter(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Austin");

    const increment = () =>{
        setCount(count + 1);
    }
    const decrment = () =>{
        setCount(count - 1);
    }
    const reset = () =>{
        setCount(0);
    }

    const changeName =({ target: {value} }) => setName(value);

    useEffect(()=>{//componentDidMount 
        console.log("Inside 1 useEffect")
        return () =>{//UI iruthu Remove agum pothu ethu call aum
            console.log("useEffect - componentWillUnmount")
        }
    },[]);// [] =>DependencyList

    useEffect(()=>{ //componentDidUpdate
        console.log("Inside 2 useEffect-update")
    });

    useEffect(()=>{
        console.log("Inside 3 useEffect-update")
    },[count])//count change agumpothu call agum

    useEffect(()=>{ 
        console.log("Inside 4 useEffect-update")
    }, [name]);

    useEffect(()=>{ 
        console.log("Inside 5 useEffect-update")
    }, [count,name]);



    console.log("Rendering...")
    return(
        <>
        <p>Count - {count}</p>
        <p></p>
        <button onClick={increment}>+</button>{" "}
        <button onClick={decrment}>-</button>{" "}
        <button onClick={reset}>0</button>{" "}

        <br /><br />
        <input type="text" value={name} onChange={changeName} />
        </>
    )
}










// React => Component


// React lifecycle methods
// Mounting, Updating, Unmounting
// class Counter extends Component(){
//     constructor(props){
//         super(props);
//         this.state ={
//             count: 0,
//             message: "Austin",
//         };

//     }
//     increment = () =>{
//         this.setstate({count: this.state.count + 1});
//     }
//     decrment = () =>{
//         this.setstate({count: this.state.count - 1});
//     }
//     reset = () =>{
//         this.setstate({count: 0});
//     }
//     // one time DidMount call agum
//     componentDidMount(){//Api Class ka use pannurom
//         //Initial  Api Calls  

//     }//modification panna use pannurom didMount

//     componentDidUpdate(){// setstate change agum pothu DidUpdate call agum
//     // Api call 
//     }//

//     // class base only
//     ComponentWillUnmount(){//UI irukthu remove gum pothu WillUnmount call agum
//     //  cleanup things use panurom
//     }


//     shouldComponentUpdate(){// update pannuma yes or no sollanum
//         // true or flase
//         return true;
//     }
//     render(){
//         return(
//             <>
//             <p>Count - {this.state.count}</p>
//             <p></p>
//             <button onClick={this.increment}>+</button>{" "}
//             <button onClick={this.decrment}>-</button>{" "}
//             <button onClick={this.reset}>0</button>{" "}
//             </>
//         )
//     }

// }
// <Counter />
// const counter = new Counter({name: "tamil", city: "Chennai"});
// counter
export default Counter;