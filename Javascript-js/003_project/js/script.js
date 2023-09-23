// js program add two number using inner html

let num1 = 5;
let num2 = 5;

// var res = "The num1: " + num1 + "<br>The num2: " + num2 + "<br>num1+num2: " + num1+num2;

// document.getElementById('second').innerHTML = num1 + " + " + num2 + " = "+ num1 + num2;

var res = `num1=${num1} <br> num2=${num2} <br> num1 + num2 = ${num1+num2}`;

document.getElementById('second').innerHTML = res;