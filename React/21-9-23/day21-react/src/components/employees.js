// import React from "react";

// function Employees(){

//     let empName = ["Gayatri", "Tom", "Jack", "Ganesh", "Hari", "Reshma"];
    
//     for(let emp of empName){
//         console.log(emp)
//     }

//     return(
//         <h1>Employees</h1>
//     );
// }
// export default Employees;

import React, { useEffect } from 'react';

function Array() {

  const array = ["sahil", "adi", "rahul"];

  useEffect(() => {

    for (let i of array) {
      console.log(i);
    }
    
  }, []);

  return (
    <div className="app">
    </div>
  );
}

export default Array;