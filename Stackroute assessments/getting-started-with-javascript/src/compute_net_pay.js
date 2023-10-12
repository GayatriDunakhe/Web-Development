/*

The calculateNetPayable() function should accept 3 inputs:
pricePerKilo, quantityInKilo and discountPercentage.

Calculate the net amount post discount that would be payable.

The function should return the computed value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = 
function calculateNetPayable(pricePerKilo, quantityInKilo, discountPercentage) {
   
  if(typeof pricePerKilo === 'string' || typeof quantityInKilo === 'string' || typeof discountPercentage === 'string'){
    return "Invalid Input Types, All Inputs Should Be of Type Number !!"
  }
  else{
    let netAmount = (pricePerKilo * quantityInKilo) - (pricePerKilo * quantityInKilo * (discountPercentage / 100));
    return netAmount;
  }
}

// var res = calculateNetPayable(5.0,10,14)
// console.log(res)