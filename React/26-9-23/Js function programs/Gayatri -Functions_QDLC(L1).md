## Gayatri Dunakhe
## BATCH-1 WAVE-2
## Functions_QDLC(L1) 

1. Write a function that takes two numbers as arguments and returns their sum.
### Normal Function
```javaScript
function add(){
    let a = 2
    let b = 5
    console.log(a+b)
}
add()
```
### Anonymous Function
```javaScript
const add = function(){
    let a = 2
    let b = 5
    console.log(a+b)
}
add()
```

### Arrow Function
```javaScript
const add = (a,b) => a+b;
console.log(`Addition is = ${add(2,5)}`)
```

2. Create a function that takes a string as an argument and returns its length.
### Normal Function
```javaScript
function lenghtStr(){
    let str = "apple";
    console.log(`Length of str = ${str.length}`)
}
lenghtStr()
```
### Anonymous Function
```javaScript
const lenghtStr = function(){
    let str = "apple";
    console.log(`Length of str = ${str.length}`)
}
lenghtStr()
```

### Arrow Function
```javaScript
const lenghtStr = (str) => str.length;
console.log(`Length of str = ${lenghtStr("gayatri")}`)
```

3. Write a function that checks if a given number is even.
### Normal Function
```javaScript
function evenNumber(num){
    const res = num%2 === 0 ? 'even' : 'odd'
    console.log(`${num} = ${res}`)
}
evenNumber(3)
```
### Anonymous Function
```javaScript
const evenNumber = function(num){
    const res = num%2 === 0 ? 'even' : 'odd'
    console.log(`${num} = ${res}`)
}
evenNumber(2)
```

### Arrow Function
```javaScript
const evenNumber = (num) => num%2 === 0 ? 'even' : 'odd';
console.log(`6 is ${evenNumber(6)}`)
```

4. Create a function that converts Celsius to Fahrenheit.
### Normal Function
```javaScript
function fahrenheit(celsius){
    const res = (celsius * 9/5) + 32;
    console.log(`${celsius} = ${res}`)
}
fahrenheit(45)
```
### Anonymous Function
```javaScript
const fahrenheit = function(celsius){
    const res = (celsius * 9/5) + 32;
    console.log(`${celsius} = ${res}`)
}
fahrenheit(20)
```

### Arrow Function
```javaScript
const fahrenheit = (celsius) => (celsius * 9/5) + 32;
console.log(`tempture in fahrenheit is ${fahrenheit(45)}`)
```

5. Write a function that takes an array of numbers and returns the largest number in the array.
### Normal Function
```javaScript
function largestNum(arr){
    let large = arr[0]

    for(let i=1; i< arr.length; i++){
        if(arr[i] > large){
            large = arr[i]
        }
    }
    console.log(large) 
}
largestNum([12, 5, 27, 8, 19, 6])
```
### Anonymous Function
```javaScript
const largestNum = function(arr){
    let large = arr[0]

    for(let i=1; i< arr.length; i++){
        if(arr[i] > large){
            large = arr[i]
        }
    }
    console.log(large) 
}
largestNum([12, 5, 27, 8, 19, 6])
```

### Arrow Function
```javaScript
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
```

6. Create a function that takes a string and returns the reverse of the string.
### Normal Function
```javaScript
function reverseStr(str){
    const res = str.split('').reverse().join('')
    console.log(res) 
}
reverseStr("apple")
```
### Anonymous Function
```javaScript
const reverseStr = function(str){
    const res = str.split('').reverse().join('')
    console.log(res) 
}
reverseStr("orange")
```

### Arrow Function
```javaScript
const reverseStr = (str) => str.split('').reverse().join('')
console.log(reverseStr("Gayatri Dunakhe"))
```

7. Write a function that checks if a string is a palindrome.
### Normal Function
```javaScript
function palindromeStr(str){
    const revStr = str.split('').reverse().join('')
    return revStr === str ? "is palindrome" : "not palindrome"
}
const res = palindromeStr("apple")
console.log(res)
```
### Anonymous Function
```javaScript
const palindromeStr = function(str){
    const revStr = str.split('').reverse().join('')
    return revStr === str ? "is palindrome" : "not palindrome"
}
const res = palindromeStr("nun")
console.log(res)
```

### Arrow Function
```javaScript
const palindromeStr = (str) =>{
    const revStr = str.split('').reverse().join('')
    return revStr === str ? "is palindrome" : "not palindrome"
}
console.log(palindromeStr("pop"))
```

8. Create a function that calculates the factorial of a given number.
### Normal Function
```javaScript
function factorial(num){
    if(num === 0 || num === 1){
        return num;
    }
    else{
        return num * factorial(num -1)
    }
}
const res = factorial(7)
console.log(res)
```
### Anonymous Function
```javaScript
const factorial = function(num){
    if(num === 0 || num === 1){
        return num;
    }
    else{
        return num * factorial(num -1)
    }
}
const res = factorial(4)
console.log(res)
```

### Arrow Function
```javaScript
const factorial = (num) => {
    if(num === 0 || num === 1){
        return num;
    }
    else{
        return num * factorial(num -1)
    }
}
console.log(`factorial ${factorial(5)}`)
```

9. Write a function that takes an array of strings and returns the longest string in the array.

### Normal Function
```javaScript
function longestStr(arrStr){
    let strlong = arrStr[0]
    for(let s of arrStr){
        if(s.length > strlong.length){
            strlong = s
        }
    }

    return strlong
}
const res = longestStr(['apple', 'orange', 'mango', 'grapes', 'banana'])
console.log(res)
```
### Anonymous Function
```javaScript
const longestStr = function(arrStr){
    let strlong = arrStr[0]
    for(let s of arrStr){
        if(s.length > strlong.length){
            strlong = s
        }
    }

    return strlong
}
const res = longestStr(['apple', 'orange', 'mango', 'grapes', 'banana'])
console.log(res)
```

### Arrow Function
```javaScript
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
```

10. Create a function that generates a random number between a given minimum and maximum value.
### Normal Function
```javaScript
function randomNumbers(min, max){
    return Math.floor(Math.random() * (max - min+1)) + min
}
const res = randomNumbers(10,20)
console.log(res)
```
### Anonymous Function
```javaScript
const randomNumbers = function(min, max){
    return Math.floor(Math.random() * (max - min+1)) + min
}
const res = randomNumbers(10,20)
console.log(res)
```

### Arrow Function
```javaScript
const randomNumbers = (min, max) => {
    return Math.floor(Math.random() * (max - min+1)) + min
}
console.log(`Randome num ${randomNumbers(1,9)}`)
```

11. Write a function that calculates the area of a rectangle given its length and width.
### Normal Function
```javaScript
function area(length, width){
    return length * width
}
const res = area(3,6)
console.log(res)
```

### Anonymous Function
```javaScript
const area = function(length, width){
    return length * width
}
const rectArea = area(3,6)
console.log(rectArea)
```

### Arrow Function
```javaScript
const area = (length, width) => length * width
console.log(`Area of rectange is ${area(5,9)}`) 
```

12. Create a function that takes an array of numbers and returns the sum of all positive numbers in the array.
### Normal Function
```javaScript
function sumOfArrayElement(arr){
    let sum = 0
    for(let i of arr){
        sum = sum + i
    }
    return sum
}
const total = sumOfArrayElement([1,2,3,4,5,6,7,8,9,10])
console.log(`Sum of all elements - ${total}`)
```
### Anonymous Function
```javaScript
const sumOfArrayElement = function(arr){
    let sum = 0
    for(let i of arr){
        sum = sum + i
    }
    return sum
}
const total = sumOfArrayElement([1,2,3,4,5])
console.log(`Sum of all elements - ${total}`)
```

### Arrow Function
```javaScript
const sumOfArrayElement2 = (arr) =>{
    let sum = 0
    for(let i of arr){
        sum = sum + i
    }
    return sum
}
console.log(`sum of all elements ${sumOfArrayElement1([1,2,3,4,5])}`)
```

13. Write a function that checks if a given number is prime.
### Normal Function
```javaScript
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
```

### Anonymous Function
```javaScript
const primeCheck = function(num){
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
const primeres = primeCheck(-2)
console.log(primeres)
```

### Arrow Function
```javaScript
const primeCheck = (num) =>{
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
const primeres = primeCheck2(12)
console.log(primeres)
```

14. Create a function that calculates the square of a number.
### Normal Function
```javaScript
function square(num){
    return Math.sqrt(num)
}
const res = square(12)
console.log(res)
```

### Anonymous Function
```javaScript
const square = function(num){
    return Math.sqrt(num)
}
const res = square(25)
console.log(res)
```

### Arrow Function
```javaScript
const square = (num) => {return Math.sqrt(num)}
const res = square(14)
console.log(res)
```

15. Write a function that takes a sentence as a string and returns the number of words in the sentence.
### Normal Function
```javaScript
function wordsCount(str){
    const words = str.split(' ')
    return words.length
}
const res = wordsCount("Hello my name is Gayatri!")
console.log(res)
```

### Anonymous Function
```javaScript
const wordsCount = function(str) =>{
    const words = str.split(' ')
    return words.length
}
const res = wordsCount("Hello my name is Gayatri!")
console.log(res)
```

### Arrow Function
```javaScript
const wordsCount = (str) =>{
    const words = str.split(' ')
    return words.length
}
const res = wordsCount("Hello my name is Gayatri!")
console.log(res)
```

16. Create a function that takes an array of strings and returns a new array with all the strings in uppercase.
### Normal Function
```javaScript
function upperCaseStr(str){
    return str.map(s => s.toUpperCase())
}
const upper = upperCaseStr(["gayu", "tom", "Hardik"])
console.log(upper)
```

### Anonymous Function
```javaScript
const upperCaseStr = function(str){
    return str.map(s => s.toUpperCase())
}
const upper = upperCaseStr(["gayu", "tom", "Hardik"])
console.log(upper)
```

### Arrow Function
```javaScript
const upperCaseStr = (str) => {
    return str.map(s => s.toUpperCase())
}
const upper = upperCaseStr(["gayu", "tom", "Hardik"])
console.log(upper)
```

17. Write a function that reverses the order of elements in an array.
### Normal Function
```javaScript
function reverseArry(arr){
    console.log(arr.reverse())
}
reverseArry([1,2,3,4,5])
```

### Anonymous Function
```javaScript
const reverseArry = function(arr){
    console.log(arr.reverse())
}
reverseArry([1,2,3,4,5])
```

### Arrow Function
```javaScript
const reverseArry = (arr) =>{
    return arr.reverse()
}
console.log(`reverse array ${reverseArry([1,2,3,4,5])}`)
```

18. Create a function that finds and returns the minimum value in an array of numbers.
### Normal Function
```javaScript
function findMin(arr){
    let min = arr[0]

    for(let i=1; i< arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
};
console.log(findMin([12, 5, 27, 8, 19, 6]))

```

### Anonymous Function
```javaScript
const findMin = function(arr){
    let min = arr[0]

    for(let i=1; i< arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
};
console.log(findMin([12, 5, 27, 8, 19, 6]))

```

### Arrow Function
```javaScript
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
```

19. Write a function that checks if a given string contains the letter 'a'.
### Normal Function
```javaScript
function contains(str){
    return str.includes('a') || str.includes('A')
}
console.log(contains("gayatri"))
```

### Anonymous Function
```javaScript
const contains = function(str){
    return str.includes('a') || str.includes('A')
}
console.log(contains("gayatri"))
```

### Arrow Function
```javaScript
const contains = (str) => {
    return str.includes('a') || str.includes('A')
}
console.log(contains("gayatri"))
```

20. Create a function that takes two strings as arguments and concatenates them.
### Normal Function
```javaScript
function concatStr(str1, str2){
    return str1 + str2
}
console.log(concatStr("hello", "Gayatri"))
```

### Anonymous Function
```javaScript
const concatStr = function(str1, str2){
    return str1 + str2
}
console.log(concatStr("hello", "Gayatri"))
```

### Arrow Function
```javaScript
const concatStr = (str1, str2) => {
    return str1 + str2
}
console.log(concatStr("hello", "Gayatri"))
```

21. Write a function that calculates the area of a circle given its radius.
### Normal Function
```javaScript
function circleArea(r){
    const pi = 3.14
    return pi * r * r
}
console.log(`Area of circle is ${circleArea(2)}`)
```

### Anonymous Function
```javaScript
const circleArea = function(r){
    const pi = 3.14
    return pi * r * r
}
console.log(`Area of circle is ${circleArea(2)}`)
```

### Arrow Function
```javaScript
const circleArea = (r) => {
    const pi = 3.14
    return pi * r * r
}
console.log(`Area of circle is ${circleArea(2)}`)
```

22. Create a function that takes an array of numbers and returns a new array with only the even numbers.
### Normal Function
```javaScript
function evenArray(arr){
    return arr.filter(num => num%2 === 0)
}
console.log(`Even array- ${evenArray([1,2,3,4,5,6,7,8,9,10])}`)
```

### Anonymous Function
```javaScript
const evenArray = function(arr){
    return arr.filter(num => num%2 === 0)
}
console.log(`Even array- ${evenArray([1,2,3,4,5,6,7,8,9,10])}`)
```

### Arrow Function
```javaScript
const evenArray = (arr) => {
    return arr.filter(num => num%2 === 0)
}
console.log(`Even array- ${evenArray([1,2,3,4,5,6,7,8,9,10])}`)
```

23. Write a function that counts the number of vowels in a string.
### Normal Function
```javaScript
function vowelCount(str){
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
```

### Anonymous Function
```javaScript
const vowelCount = function(str){
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
```

### Arrow Function
```javaScript
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
```

24. Create a function that takes an array of numbers and returns a new array with the numbers in reverse order.
### Normal Function
```javaScript
function reverseArry(arr){
    return arr.reverse()
}
console.log(`reverse array ${reverseArry([1,2,3,4,5])}`)
```

### Anonymous Function
```javaScript
const reverseArry = function(arr){
    return arr.reverse()
}
console.log(`reverse array ${reverseArry([1,2,3,4,5])}`)
```

### Arrow Function
```javaScript
const reverseArry = (arr) =>{
    return arr.reverse()
}
console.log(`reverse array ${reverseArry([1,2,3,4,5])}`)
```

25. Write a function that checks if a given string is a valid email address.
### Normal Function
```javaScript
function validEmail(email){
    const eaddress = email.includes('@gmail.com')
    return eaddress ? "valid email" : "not valid email"
}
console.log(`email address - ${validEmail("gayatri@gmail.com")}`)
```
### Anonymous Function
```javaScript
const validEmail = function(email){
    const eaddress = email.includes('@gmail.com')
    return eaddress ? "valid email" : "not valid email"
}
console.log(`email address - ${validEmail("gayatri@gmail.com")}`)
```

### Arrow Function
```javaScript
const validEmail = (email) => {
    const eaddress = email.includes('@gmail.com')
    return eaddress ? "valid email" : "not valid email"
}
console.log(`email address - ${validEmail("gayatri@gmail.com")}`)
```

26. Create a function that takes two numbers as arguments and returns the larger of the two.
### Normal Function
```javaScript
function largerInTwo(n1, n2){
    return n1 > n2 ? n1 : n2
}
console.log(`larger among two ${largerInTwo(5,13)}`)
```

### Anonymous Function
```javaScript
const largerInTwo = function(n1, n2){
    return n1 > n2 ? n1 : n2
}
console.log(`larger among two ${largerInTwo(5,13)}`)
```

### Arrow Function
```javaScript
const largerInTwo = (n1, n2) => {
    return n1 > n2 ? n1 : n2
}
console.log(`larger among two ${largerInTwo(5,13)}`)
```

27. Write a function that generates a random password of a specified length.
### Normal Function
```javaScript
function password(rang){
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let pwd = "";

  for (let i = 0; i < rang; i++) {
    const ran = Math.floor(Math.random() * chars.length);
    pwd += chars[ran];
  }

  return pwd;
}
console.log(`random password - ${password(5)}`)
```

### Anonymous Function
```javaScript
const password = function(rang){
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let pwd = "";

  for (let i = 0; i < rang; i++) {
    const ran = Math.floor(Math.random() * chars.length);
    pwd += chars[ran];
  }

  return pwd;
}
console.log(`random password - ${password(5)}`)
```

### Arrow Function
```javaScript
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
```

28. Create a function that takes an array of strings and returns a new array with only the strings that contain more than 5 characters.
### Normal Function
```javaScript
function createArray(arr){
    return arr.filter((ar) => ar.length > 5)
}

const fruits1 = ["apple", "mango", "papaya", "graps", "dragon", "orange"]
console.log(fruits1)
const fruits2 = createArray(fruits1)
console.log(fruits2)
```

### Anonymous Function
```javaScript
const createArray = function(arr){
    return arr.filter((ar) => ar.length > 5)
}

const fruits1 = ["apple", "mango", "papaya", "graps", "dragon", "orange"]
console.log(fruits1)
const fruits2 = createArray(fruits1)
console.log(fruits2)
```

### Arrow Function
```javaScript
const createArray = (arr) => {
    return arr.filter((ar) => ar.length > 5)
}

const fruits1 = ["apple", "mango", "papaya", "graps", "dragon", "orange"]
console.log(fruits1)
const fruits2 = createArray(fruits1)
console.log(fruits2)
```

29. Write a function that calculates the area of a triangle given its base and height.
### Normal Function
```javaScript
function triangle(base, height){
    return (1/2) * base * height;
}
console.log(`area of triangle- ${triangle(4,80)}`)
```

### Anonymous Function
```javaScript
const triangle = function(base, height){
    return (1/2) * base * height;
}
console.log(`area of triangle- ${triangle(4,80)}`)
```

### Arrow Function
```javaScript
const triangle = (base, height) => {
    return (1/2) * base * height;
}
console.log(`area of triangle- ${triangle(4,80)}`)
```

30. Create a function that takes an array of numbers and returns the product of all the numbers in the array.
### Normal Function
```javaScript
function productArray(arr){
    let product = 1
    for(let i of arr){
        product = product * i
    }
    return product;
}
console.log(`product of array = ${productArray([1,2,3,4,5,6,7,8,9])}`)
```

### Anonymous Function
```javaScript
const productArray = function(arr){
    let product = 1
    for(let i of arr){
        product = product * i
    }
    return product;
}
console.log(`product of array = ${productArray([1,2,3,4,5,6,7,8,9])}`)
```

### Arrow Function
```javaScript
const productArray = (arr) => {
    let product = 1
    for(let i of arr){
        product = product * i
    }
    return product;
}
console.log(`product of array = ${productArray([1,2,3,4,5,6,7,8,9])}`)
```
