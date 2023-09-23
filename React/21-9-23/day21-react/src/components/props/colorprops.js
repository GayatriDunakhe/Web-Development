import React from 'react';

function ColorPropsComponent(props) {

    const styles = {
        backgroundColor: props.color[3],
        padding: '20px'
    }

    return (
        <div>
            <h2>Color props</h2>
            <div style={styles}>Hello!</div>
            {/* <button>Change color</button> */}
        </div>
    );
}

export default ColorPropsComponent;