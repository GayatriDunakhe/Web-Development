
/*
The drawPattern() function should accept number of rows as input.
The function should return string that contains the pyramid structure for the number of rows inputted.
The pyramid structure should have the following pattern:
        *
       * *
      * * *
     * * * *
    * * * * *
The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.
*/
module.exports = function drawPattern(rows) {
  
  if(typeof rows === 'string'){
    return "Invalid Input Type, Row Input Should Be of Type Number !!"
  }
  else{
    let res = ''
    for(let i = 0; i <= rows; i++){

      for(let j = rows -i; j > 0; j++){
        res += ' '
      }

      for(let k = 1; k <= i; k++){
        res += '* '
      }

      res += '\n' 
    }

    return res;
  }
}