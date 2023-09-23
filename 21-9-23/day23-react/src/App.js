import logo from './logo.svg';
import './App.css';
import Employees from './components/employees'
import React, { useEffect } from 'react';
import ParentComponent from './ParentComponent';

function App() {
  
  return(
    <div className="App">
      <h1>React Props Example</h1>
      <ParentComponent />
    </div>
  );

  // let empName = ["Gayatri", "Tom", "Jack", "Ganesh", "Hari", "Reshma"];
    
    // for(let emp of empName){
    //     console.log(emp)
    // }

    // empName.forEach((employee, index) => {
    //   console.log(`Employee ${index + 1}: ${employee}`);
    // });

    // useEffect(() => {
    //   for (let index = 0; index < empName.length; index++) {
    //     const employee = empName[index];
    //     console.log(`Employee ${index + 1}: ${employee}`);
    //   }
    // }, []);

  // const array = ["sahil", "adi", "rahul"];

  // useEffect(() => {

  //   for (let i of array) {
  //     console.log(i);
  //   }
    
  // }, []);

  // return (
    // <div className="App">
      {/* <Employees/> */}
      {/* <h1>Employees</h1>
      <ul>
        {empName.map((employee, index) => (
          <li key={index}>{employee}</li>
        ))}
      </ul> */}

    {/* </div> */}
  {/* ); */}

}

export default App;
