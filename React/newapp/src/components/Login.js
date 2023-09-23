import React, { useState } from "react";
import Signup from './Signup';


const Login = () =>{

    // const name = "Page"
    const [firstname, setFirstname] = useState('');
    const [password, setPasword] = useState('');

    // const [msg, setMsg] = useState('');

    const handleFirstnameChange=(event)=>{
        setFirstname(event.target.value)
    }

    const handlePassowrdChange=(event)=>{
        setPasword(event.target.value)
    }

    const handleMsg=()=>{
        // setMsg(`Logged in ${firstname}`)

        const pwd = '123456'
        const uname = 'gayatri'

        if(firstname == uname && password == pwd){
            alert(`Logged in ${firstname}`)
        }
        else{
            alert('Logged in as a guest')
        }
    }
    
    return(
        <div>
            {/* <h2>Hello, {firstname} </h2> */}
            <input type="text" placeholder="Enter your name" value={firstname} onChange={handleFirstnameChange}/>
            <br/>

            {/* <h2>Your password - {password} </h2> */}
            <input type="" placeholder="Enter your password" value={password} onChange={handlePassowrdChange}/>

            <br/><br/>
            {/* <h2>{msg} </h2> */}
            <button onClick={handleMsg}>Login</button>
            <Signup />
        </div>
    );
}

export default Login;