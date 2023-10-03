import React from 'react';

function ListPropsComponent(props) {
  return (
    <div>
      <h2>List of props</h2>
        <li>{props.emp[0]}</li>
        <li>{props.emp[1]}</li>
        <li>{props.emp[2]}</li>
        <li>{props.emp[3]}</li>
    </div>
  );
}

export default ListPropsComponent;
