import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <h2>Greeting props</h2>
      <p>Hello {props.empname} nice to meet you!</p>
    </div>
  );
}

export default ChildComponent;