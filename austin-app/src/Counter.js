import React, { Component, useState, useEffect, useReducer } from "react";


function Counter() {
    const [form, setValue] = useState({
        firstName: "",
        lastName: "",
        Email: "",
        Avatar: ""
    });

    const handChange= ({target: {name, value}}) =>{
        setValue({...form, [name]: value});
        console.log(name, value);
    }

    const submitForm = (evt) =>{
        evt.preventDefault();
        console.log(form)
    }
    return (
        <div className="container mt-5 row">
            <div className="col-sm-4"></div>
            <div className="col-sm-6">


                <div className="card">
                    <div className="card-body">

                        <form action="./index.html" onSubmit={submitForm}>
                            <div className="form-group">
                                <label htmlFor="fname">First Name:</label>
                                <input type="text" className="form-control" id="fname" name="fname"
                                    placeholder="Enter Your First Name"
                                    value={form.firstName}
                                    onChange={handChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lname">Last Name:</label>
                                <input type="text" className="form-control" id="lname" name="lname"
                                    placeholder="Enter Your Last Name" 
                                    value={form.lastName}
                                    onChange={handChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form-control" id="email" name="email"
                                    placeholder="Enter Your Email "
                                    value={form.Email}
                                    onChange={handChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="avatar">Avatar:</label>
                                <input type="text" className="form-control" id="avatar" name="avatar"
                                    placeholder="Enter Your URL " 
                                    value={form.Avatar}
                                    onChange={handChange}
                                    required />
                            </div>
                            <div className="form-group m-3">
                                <button type="reset" className="btn btn-secondary">Reset</button>
                                <button type="submit" className="btn btn-success">submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}












//useEffect React Hooks
// function Counter(){
//     const [count, setCount] = useReducer();//2 parameter iruku 1-> function 2-> value
//     const [name, setName] = useState("Austin");
//     //useReducer same to useState


//     const increment = () =>{
//         setCount(count + 1);
//     }
//     const decrment = () =>{
//         setCount(count - 1);
//     }
//     const reset = () =>{
//         setCount(0);
//     }

//     const changeName =({ target: {value} }) => setName(value);

//     useEffect(()=>{//componentDidMount 
//         console.log("Inside 1 useEffect")
//         return () =>{//UI iruthu Remove agum pothu ethu call aum
//             console.log("useEffect - componentWillUnmount")
//         }
//     },[]);// [] =>DependencyList

//     useEffect(()=>{ //componentDidUpdate
//         console.log("Inside 2 useEffect-update")
//     });

//     useEffect(()=>{
//         console.log("Inside 3 useEffect-update")
//     },[count])//count change agumpothu call agum

//     useEffect(()=>{ 
//         console.log("Inside 4 useEffect-update")
//     }, [name]);

//     useEffect(()=>{ 
//         console.log("Inside 5 useEffect-update")
//     }, [count,name]);



//     console.log("Rendering...")
//     return(
//         <>
//         <p>Count - {count}</p>
//         <p></p>
//         <button onClick={increment}>+</button>{" "}
//         <button onClick={decrment}>-</button>{" "}
//         <button onClick={reset}>0</button>{" "}

//         <br /><br />
//         <input type="text" value={name} onChange={changeName} />
//         </>
//     )
// }










// React => Component


// React lifecycle methods
// Mounting, Updating, Unmounting
// className Counter extends Component(){
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

//     // className base only
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