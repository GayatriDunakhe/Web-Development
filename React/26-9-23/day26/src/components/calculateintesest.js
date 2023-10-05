import React, { Component } from 'react';

class SimpleInterestCalculator extends Component {
    state = {
      principal: 0,
      rate: 0,
      time: 0,
      result: 0,
};

handlePrincipalChange = (e) => {
    this.setState({ principal: parseFloat(e.target.value) });
};

handleRateChange = (e) => {
    this.setState({ rate: parseFloat(e.target.value) })
}

handleTimeChange = (e) => {
    this.setState({ time: parseFloat(e.target.value) })
}

calculateInterest = () => {
    const {principal, rate, time} = this.state
    const interest = (principal * rate * time) / 100
    this.setState({ result: interest })
}

render() {
    const { principal, rate, time, result } = this.state;

return (
    <div>
      <h1>Simple Interest Calculator</h1>
      <div>
        <label>Principal Amount:</label>
        <input type="number" value={principal} onChange={this.handlePrincipalChange} />
      </div>
      <div>
        <label>Rate of Interest:</label>
        <input type="number" value={rate} onChange={this.handleRateChange} />
      </div>
      <div>
        <label>Time (in years):</label>
        <input type="number" value={time} onChange={this.handleTimeChange} />
      </div>
      <button onClick={this.calculateInterest}>Calculate Interest</button>
      <div>
        <label>Simple Interest:</label>
        <span>{result}</span>
      </div>
    </div>
  );
}}
export default SimpleInterestCalculator;