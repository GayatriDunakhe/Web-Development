import React, { Component } from 'react';

class Login extends Component{
    state = {
        name: '',
        email: '',
    }

    handleNameChange = (e) =>{
        this.setState({ name: e.target.value });
    }

    handleEmailChange = (e) =>{
        this.setState({ email: e.target.value });
    }

    showAlert = () => {
        const {name, email} = this.state
        this.setState(alert(`Hello ${name} and your ${email}`)) 
    }

    render(){
        const {name, email} = this.state;

        return(
            <div>
            <h1>Login Form</h1>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={this.handleNameChange} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={this.handleEmailChange} />
            </div>
            <button onClick={this.showAlert}>Submit</button>
            </div>
        );
    }
}

export default Login;