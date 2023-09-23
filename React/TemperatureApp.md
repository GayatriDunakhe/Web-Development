# Task

**Temperature Converter**: Build a temperature converter that converts between Celsius and Fahrenheit.


## Code:

```jsx
import React, { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    setCelsius(celsiusValue);
    setFahrenheit(fahrenheitValue);
  }

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    setFahrenheit(fahrenheitValue);
    setCelsius(celsiusValue);
  }

  return (
    <div>
      <h1>Temperature Converter</h1>
      <div>
        <label>Celsius:</label>
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
      </div>
      <div>
        <label>Fahrenheit:</label>
        <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
      </div>
    </div>
  );
}

export default TemperatureConverter;
```

## Explanation :

1. **Importing React and useState**:
   - `import React, { useState } from 'react';`: In this line, we are importing the `React` library and the `useState` hook from the 'react' module. React is a JavaScript library used for building user interfaces, and `useState` is a hook that allows you to add state to functional components.

2. **Defining the TemperatureConverter component**:
   - `function TemperatureConverter() {`: Here, we define a React functional component named `TemperatureConverter`. This component will render a temperature conversion interface.

3. **Setting up state variables**:
   - `const [celsius, setCelsius] = useState('');`: We are using the `useState` hook to create two state variables, `celsius` and `fahrenheit`. `celsius` will store the Celsius temperature value, and `fahrenheit` will store the Fahrenheit temperature value. The initial values are set to empty strings ('').

4. **Handling Celsius input change**:
   - `const handleCelsiusChange = (e) => {`: This function is called when the user types in the Celsius input field.
   - `const celsiusValue = e.target.value;`: We get the value entered by the user in the Celsius input field.
   - `const fahrenheitValue = (celsiusValue * 9/5) + 32;`: We calculate the equivalent Fahrenheit temperature.
   - `setCelsius(celsiusValue);`: We update the `celsius` state variable with the new Celsius value.
   - `setFahrenheit(fahrenheitValue);`: We update the `fahrenheit` state variable with the corresponding Fahrenheit value.

5. **Handling Fahrenheit input change**:
   - `const handleFahrenheitChange = (e) => {`: This function is called when the user types in the Fahrenheit input field.
   - `const fahrenheitValue = e.target.value;`: We get the value entered by the user in the Fahrenheit input field.
   - `const celsiusValue = (fahrenheitValue - 32) * 5/9;`: We calculate the equivalent Celsius temperature.
   - `setFahrenheit(fahrenheitValue);`: We update the `fahrenheit` state variable with the new Fahrenheit value.
   - `setCelsius(celsiusValue);`: We update the `celsius` state variable with the corresponding Celsius value.

6. **Rendering the user interface**:
   - Inside the `return` statement, we define the user interface for our component. It includes:
     - A title ("Temperature Converter").
     - Two input fields for Celsius and Fahrenheit, each with their labels.
     - The input fields are controlled inputs, meaning their values are bound to the `celsius` and `fahrenheit` state variables, and they trigger the respective change handlers when the user types.

7. **Exporting the component**:
   - `export default TemperatureConverter;`: Finally, we export the `TemperatureConverter` component so that it can be used in other parts of the application.

