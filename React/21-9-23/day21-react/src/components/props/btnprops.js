import React from 'react';

function ButtonPropsComponent(props) {

    const handleBtnClick = () =>{
        props.btnClicked();
    }

    return (
        <div>
        <h2>Button props</h2>
        <button onClick={handleBtnClick}>Click me</button>
        </div>
    );
}

export default ButtonPropsComponent;