
## SimpleInterestApp

1. How does the `SimpleInterestCalculator` component handle changes in the principal amount input field?
- `SimpleInterestCalculator` by utilizing the `handlePrincipalChange` method. This method is triggered whenever the onChange event of the principal input field occurs. It updates the principal state with the parsed float value of the input.

2. What event triggers the `handleRateChange` method in the `SimpleInterestCalculator` component?
- `handleRateChange` method is triggered by the `onChange` event of the rate of interest input field. It updates the rate state with the parsed float value of the input.

3. Explain how the `calculateInterest` method computes the simple interest in this React component.
- `calculateInterest` method computes the simple interest by applying the simple interest formula: `Interest = (Principal * Rate * Time) / 100`. It retrieves the values of principal, rate, and time from the component's state, calculates the interest, and updates the result state with the computed value.

4. How is the `result` state variable updated after clicking the "Calculate Interest" button?
- `result` state variable is updated after clicking the "Calculate Interest" button through the `calculateInterest` method. When the button is clicked, this method is executed, which performs the interest calculation and sets the result state to the calculated interest.

5. Can you describe the purpose of the `parseFloat` function calls in the event handlers?
- The `parseFloat` function calls in the event handlers, such as handlePrincipalChange, handleRateChange, and handleTimeChange, are used to parse the input values from strings to floating-point numbers. This ensures that the input values are treated as numbers in calculations. 

6. What happens when the user inputs a non-numeric value in the rate of interest field?
- When a user inputs a non-numeric value in the rate of interest field, it will result in `NaN Not-a-Number` being stored in the rate state. This is because the parseFloat function cannot parse non-numeric strings into valid numbers.

7. How can you prevent negative values for the principal amount in this React component?
- To prevent negative values for the principal amount, we add input validation in the `handlePrincipalChange` method. Before updating the principal state with the parsed value, we will check if the parsed value is greater than or equal to zero. If it's negative, so choose to display an error message to the user or simply ignore the input.

8. Is there any input validation implemented for the time (in years) field? If not, how could it be added?
- No input validation is currently implemented for the time (in years) field. To add input validation, we can check whether the parsed value in the `handleTimeChange` method is greater than zero (since time cannot be negative). If the value is invalid, so display an error message.

9. How would you enhance the user experience by providing feedback when the interest is calculated?
- To enhance the user experience we can provide feedback when the interest is calculated or also display a message.

10. What would be a suitable use case for this Simple Interest Calculator React component in a larger application?
- A suitable use case for this Simple Interest Calculator React component in a larger application would be in a financial or banking application where users need to calculate simple interest on loans or investments.