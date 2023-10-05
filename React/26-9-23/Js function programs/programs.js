// 1- Write a function that takes two numbers as arguments and returns their sum.
const add = (a,b) => a+b;
console.log(`Addition is = ${add(2,5)}`)

// 2- Create a function that takes a string as an argument and returns its length.
const lenghtStr = (str) => str.length;
console.log(`Length of str = ${lenghtStr("gayatri")}`)

// 3- Write a function that checks if a given number is even.
// anonymous function
const evenNumber1 = function(num){
    const res = num%2 === 0 ? 'even' : 'odd'
    console.log(`${num} = ${res}`)
}
evenNumber1(2)

// arrow function
const evenNumber = (num) => num%2 == 0 ? 'even' : 'odd';
console.log(`6 is ${evenNumber(6)}`)

// 4 - Create a function that converts Celsius to Fahrenheit.
// anonymous function
const fahrenheit1 = function(celsius){
    const res = (celsius * 9/5) + 32;
    console.log(`${celsius} = ${res}`)
}
fahrenheit1(20)

// arrow function
const fahrenheit = (celsius) => (celsius * 9/5) + 32;
console.log(`tempture in fahrenheit is ${fahrenheit(45)}`)

// 5- Write a function that takes an array of numbers and returns the largest number in the array.

// anonymous function
const largestNum1 = function(arr){
    let large = arr[0]

    for(let i=1; i< arr.length; i++){
        if(arr[i] > large){
            large = arr[i]
        }
    }
    console.log(large) 
}
largestNum1([12, 5, 67, 8, 19, 6])

// arrow function
const largestNum = (arr) => {
    let large = arr[0]

    for(let i=1; i< arr.length; i++){
        if(arr[i] > large){
            large = arr[i]
        }
    }
    return large
};
console.log(largestNum([12, 5, 27, 8, 19, 6]))

// 6- Create a function that takes a string and returns the reverse of the string.

// anonyomus function
const reverseStr1 = function(str){
    const res = str.split('').reverse().join('')
    console.log(res) 
}
reverseStr1("orange")

// arrow function
const reverseStr = (str) => str.split('').reverse().join('')
console.log(`revers string ${reverseStr("Gayatri Dunakhe")}`)

// 7- Write a function that checks if a string is a palindrome.

// anonymous function
const palindromeStr1 = function(str){
    const revStr = str.split('').reverse().join('')
    return revStr === str ? "is palindrome" : "not palindrome"
}
const res = palindromeStr1("nun")
console.log(res)

// arrow function
const palindromeStr = (str) =>{
    const revStr = str.split('').reverse().join('')
    return revStr === str ? "is palindrome" : "not palindrome"
}
console.log(palindromeStr("pop"))

// 8- Create a function that calculates the factorial of a given number.

// anonymouns function
const factorial1 = function(num){
    if(num === 0 || num === 1){
        return num;
    }
    else{
        return num * factorial1(num -1)
    }
}
const result = factorial1(4)
console.log(result)

// arrow function
const factorial = (num) => {
    if(num === 0 || num === 1){
        return num;
    }
    else{
        return num * factorial(num -1)
    }
}
console.log(`factorial ${factorial(5)}`)

// 9- Write a function that takes an array of strings and returns the longest string in the array.

// anonymous function
const longestStr1 = function(arrStr){
    let strlong = arrStr[0]
    for(let s of arrStr){
        if(s.length > strlong.length){
            strlong = s
        }
    }

    return strlong
}
const fruits = longestStr1(['apple', 'orange', 'mango', 'grapes', 'banana'])
console.log(fruits)

// arrow function
const longestStr = (arrStr) =>{
    let strlong = arrStr[0]
    for(let s of arrStr){
        if(s.length > strlong.length){
            strlong = s
        }
    }

    return strlong
}
console.log(`Longest str = ${longestStr(['gayatri', 'ganesh', 'gopal', 'priya', 'harikrishan'])}`)

// 10- Create a function that generates a random number between a given minimum and maximum value.
// anonymous
const randomNumbers1 = function(min, max){
    return Math.floor(Math.random() * (max - min+1)) + min
}
const ranNum = randomNumbers1(10,20)
console.log(ranNum)

// arrow function
const randomNumbers = (min, max) => {
    return Math.floor(Math.random() * (max - min+1)) + min
}
console.log(`Randome num ${randomNumbers(1,9)}`)

// 11- Write a function that calculates the area of a rectangle given its length and width.

// anonymouns function
const area1 = function(length, width){
    return length * width
}
const rectArea = area1(3,6)
console.log(rectArea)

// arrow function
const area = (length, width) => length * width
console.log(`Area of rectange is ${area(5,9)}`) 

// 12- Create a function that takes an array of numbers and returns the sum of all positive numbers in the array.

// normal function
function sumOfArrayElement(arr){
    let sum = 0
    for(let i of arr){
        sum = sum + i
    }
    return sum
}
const total = sumOfArrayElement([1,2,3,4,5,6,7,8,9,10])
console.log(`Sum of all elements - ${total}`)

// anonymous function
const sumOfArrayElement1 = function(arr){
    let sum = 0
    for(let i of arr){
        sum = sum + i
    }
    return sum
}
const total1 = sumOfArrayElement1([1,2,3,4,5])
console.log(`Sum of all elements - ${total1}`)

// arrow function
const sumOfArrayElement2 = (arr) =>{
    let sum = 0
    for(let i of arr){
        sum = sum + i
    }
    return sum
}
console.log(`sum of all elements ${sumOfArrayElement1([1,2,3,4,5])}`)

// 13- Write a function that checks if a given number is prime.

// normal function
function primeCheck(num){
    if(num <= 1){
        return "is not prime";
    }
    else{
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0){
                return "is not prime";
            }
        }
    }
    return "is prime";
}
const primeres = primeCheck(7)
console.log(primeres)

// anonymous function
const primeCheck1 = function(num){
    if(num <= 1){
        return "is not prime";
    }
    else{
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0){
                return "is not prime";
            }
        }
    }
    return "is prime";
}
const primeres1 = primeCheck1(-2)
console.log(primeres1)

// arrow function
const primeCheck2 = (num) =>{
    if(num <= 1){
        return "is not prime";
    }
    else{
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0){
                return "is not prime";
            }
        }
    }
    return "is prime";
}
const primeres2 = primeCheck2(12)
console.log(primeres2)

// 14 - Create a function that calculates the square of a number.
const square = (num) => {return Math.sqrt(num)}
const sqrtres = square(25)
console.log(sqrtres)

// 15- Write a function that takes a sentence as a string and returns the number of words in the sentence.
const wordsCount = (str) => {
    const words = str.split(' ')
    return words.length
}
const words = wordsCount("Hello my name is Gayatri!")
console.log(words)

// 16- Create a function that takes an array of strings and returns a new array with all the strings in uppercase.
const upperCaseStr = (str) => {
    return str.map(s => s.toUpperCase())
}
const upper = upperCaseStr(["gayu", "tom", "Hardik"])
console.log(upper)

// 17- Write a function that reverses the order of elements in an array.
const reverseArry = (arr) =>{
    return arr.reverse()
}
console.log(`reverse array ${reverseArry([1,2,3,4,5])}`)

//  18- Create a function that finds and returns the minimum value in an array of numbers.
const findMin = (arr) => {
    let min = arr[0]

    for(let i=1; i< arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
};
console.log(findMin([12, 5, 27, 8, 19, 6]))

// 19 - Write a function that checks if a given string contains the letter 'a'.
const contains = (str) => {
    return str.includes('a') || str.includes('A')
}
console.log(contains("gayatri"))

// 20- Create a function that takes two strings as arguments and concatenates them.
const concatStr = (str1, str2) => {
    return str1 + str2
}
console.log(concatStr("hello", "Gayatri"))

// 21 - Write a function that calculates the area of a circle given its radius.
const circleArea = (r) => {
    const pi = 3.14
    return pi * r * r
}
console.log(`Area of circle is ${circleArea(2)}`)

// 22- Create a function that takes an array of numbers and returns a new array with only the even numbers.
const evenArray = (arr) => {
    return arr.filter(num => num%2 === 0)
}
console.log(`Even array- ${evenArray([1,2,3,4,5,6,7,8,9,10])}`)

// 23- Write a function that counts the number of vowels in a string.
const vowelCount = (str) => {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
        count++;
        }
    }

    return count;
}
console.log(`vowelcounts = ${vowelCount("amazing")}`)

// 24- Create a function that takes an array of numbers and returns a new array with the numbers in reverse order.
const reverseArry1 = (arr) =>{
    return arr.reverse()
}
console.log(`reverse array ${reverseArry1([1,2,3,4,5])}`)

// 25- Write a function that checks if a given string is a valid email address.
const validEmail = (email) => {
    const eaddress = email.includes('@gmail.com')
    return eaddress ? "valid email" : "not valid email"
}
console.log(`email address - ${validEmail("gayatri@gmail.com")}`)

//  26- Create a function that takes two numbers as arguments and returns the larger of the two.
const largerInTwo = (n1, n2) => {
    return n1 > n2 ? n1 : n2
}
console.log(`larger among two ${largerInTwo(5,13)}`)

//  27- Write a function that generates a random password of a specified length.
const password = (rang) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let pwd = "";

  for (let i = 0; i < rang; i++) {
    const ran = Math.floor(Math.random() * chars.length);
    pwd += chars[ran];
  }

  return pwd;
}
console.log(`random password - ${password(5)}`)

// 28 - Create a function that takes an array of strings and returns a new array with only the strings that contain more than 5 characters.
const createArray = (arr) => {
    return arr.filter((ar) => ar.length > 5)
}

const fruits1 = ["apple", "mango", "papaya", "graps", "dragon", "orange"]
console.log(fruits1)
const fruits2 = createArray(fruits1)
console.log(fruits2)

// 29 - Write a function that calculates the area of a triangle given its base and height.
const triangle = (base, height) => {
    return (1/2) * base * height;
}
console.log(`area of triangle- ${triangle(4,80)}`)

// 30- Create a function that takes an array of numbers and returns the product of all the numbers in the array.
const productArray = (arr) => {
    let product = 1
    for(let i of arr){
        product = product * i
    }
    return product;
}
console.log(`product of array = ${productArray([1,2,3,4,5,6,7,8,9])}`)