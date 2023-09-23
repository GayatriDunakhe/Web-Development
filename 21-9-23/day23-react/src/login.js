import React from 'react';

function Login(props) {

    var res = "";

    if(props.isLoggedIn == true){
        res = "Welcome"
    }
    else{
        res = "Please log in"
    }

  return (
    <div>
      <h2>Child Component</h2>
      <p>{res}</p>
    </div>
  );
}

export default Login;