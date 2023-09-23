import React from 'react';
// import ChildComponent from './ChildComponent';
import Login from './login';

import MsgProps from './components/props/msgprops';
import ListProps from './components/props/listprops';
import BtnProps from './components/props/btnprops';
import CounterProps from './components/props/counterprops';
import ColorProps from './components/props/colorprops';

function ParentComponent() {
  // const greetingText = "Hello from ParentComponent!";
  
  // const isLoggedIn = false;
  // const isLoggedIn = true;

  const showMsg = () =>{
    alert("Hey you click me?")
  }
  
  return (
    <div>
      {/* <h1>Parent Component</h1> */}
      {/* <ChildComponent text={greetingText} /> */}
      {/* <Login value={isLoggedIn}/> */}

      {/*1. greeting props */}
      <MsgProps empname={"Gayatri"}/>

      {/*2. list of props */}
      <ListProps emp={["Gayatri", "Dunakhe", 22, "Female"]}/>

      {/*3. button props */}
      <BtnProps btnClicked={showMsg}/>

      {/*4. counter props */}
      <CounterProps counter={0}/>

      {/*5. color props */}
      <ColorProps color={["red", "pink", "yellow", "wheat", "orange"]}/>

    </div>
  );
}

export default ParentComponent;