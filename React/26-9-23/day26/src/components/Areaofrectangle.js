import React, { Component } from 'react';

class RectangleArea extends Component{
    state = {
        height: 0,
        width: 0,
        area: 0
    }

    handleHeightChange = (e) =>{
        this.setState({ height: parseInt(e.target.value) });
    }

    handleWidthChange = (e) =>{
        this.setState({ width: parseInt(e.target.value) });
    }

    calculate = () => {
        const {height, width, area} = this.state
        const res = height * width
        this.setState({area: res}) 
    }

    render(){
        const {height, width, area} = this.state;

        return(
            <div>
            <h1>Rectangle Area</h1>
            <div>
                <label>Height:</label>
                <input type="number" value={height} onChange={this.handleHeightChange} />
            </div>
            <div>
                <label>Width:</label>
                <input type="number" value={width} onChange={this.handleWidthChange} />
            </div>
            <button onClick={this.calculate}>Area</button>
            <div>
                <label>Area of Rectangle:</label>
                <span>{area}</span>
            </div>
            </div>
        );
    }
}

export default RectangleArea;