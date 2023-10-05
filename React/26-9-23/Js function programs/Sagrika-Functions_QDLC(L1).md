# SAGARIKA
# BATCH-1 WAVE-2
## Functions_QDLC(L1) 

1. Write a function that takes two numbers as arguments and returns their sum.
  - const add = (a,b) => {a+b};

2. Create a function that takes a string as an argument and returns its length.
  - const stringlength = (str) => str.length;

3. Write a function that checks if a given number is even.
  - const isEven = (num) => num % 2 == 0;

4. Create a function that converts Celsius to Fahrenheit.
  - const temp = (degCelsius) => (degCelsius*9/5)+32;

5. Write a function that takes an array of numbers and returns the largest number in the array.
  - const findLargestNumber = (numbers) => {
    if (numbers.length === 0) {
      return undefined; 
    }
    let largestNumber = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largestNumber) {
        largestNumber = numbers[i]; 
      }
    }return largestNumber;
    };

6. Create a function that takes a string and returns the reverse of the string.
  - const reverseString = (inputString) => {return inputString.split('').reverse().join('');};

7. Write a function that checks if a string is a palindrome.
  - const isPalindrome = (str) => {
      const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      const reversedStr = cleanedStr.split('').reverse().join('');
      return cleanedStr === reversedStr;
    };

8. Create a function that calculates the factorial of a given number.
  - const calculateFactorial = (n) => {
      if (n === 0 || n === 1) {
        return 1; // Factorial of 0 and 1 is 1.
      }
      let factorial = 1;
      for (let i = 2; i <= n; i++) {
        factorial *= i;
      }
      return factorial;
    };

9. Write a function that takes an array of strings and returns the longest string in the array.
  - const findLongestString = (strings) => {
      if (strings.length === 0) {
        return undefined; 
        default value if needed.
      }
      let longestString = strings[0];
      for (let i = 1; i < strings.length; i++) {
        if (strings[i].length > longestString.length) {
          longestString = strings[i]; 
        }
      } return longString
    }


10. Create a function that generates a random number between a given minimum and maximum value.
  - const generateRandomNumber = (min, max) => {
      if (min >= max) {
        throw new Error("Minimum value must be less than the maximum value.");
      }
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

11. Write a function that calculates the area of a rectangle given its length and width.
  - const calculateRectangleArea = (length, width) => {
      if (length <= 0 || width <= 0) {
        throw new Error("Both length and width must be positive values.");
      }
      return length * width;
    };

12. Create a function that takes an array of numbers and returns the sum of all positive numbers in the array.
  - const sumPositiveNumbers = (numbers) => {
      return numbers.reduce((sum, num) => {
        if (num > 0) {
          return sum + num;
        }
        return sum;
     }, 0);
    };

13. Write a function that checks if a given number is prime.
  - const isPrime = (num) => {
      if (num <= 1) {
        return false; 
      }
      if (num <= 3) {
        return true; 
      }
      if (num % 2 === 0 || num % 3 === 0) {
        return false; 
      }
      let divisor = 5;
      while (divisor * divisor <= num) {
        if (num % divisor === 0 || num % (divisor + 2) === 0) {
          return false; 
        }
        divisor += 6; 
      }
      return true; 
    };

14. Create a function that calculates the square of a number.
  - const square = (x) => {x*x};

15. Write a function that takes a sentence as a string and returns the number of words in the sentence.
  - const countWordsInSentence = (sentence) => {
      if (!sentence || sentence.trim() === "") {
        return 0; 
      }
      const words = sentence.trim().split(/\s+/);
      return words.length;
    };

16. Create a function that takes an array of strings and returns a new array with all the strings in uppercase.
  - const convertToUppercase = (strings) => {
      return strings.map((str) => str.toUpperCase());
    };

17. Write a function that reverses the order of elements in an array.
  - const reverseArray = (arr) => {
      return arr.slice().reverse();
    };

18. Create a function that finds and returns the minimum value in an array of numbers.
  - const findMinimumValue = (numbers) => {
      if (numbers.length === 0) {
        throw new Error("The array is empty."); 
      }
      let minimumValue = numbers[0]; // Assume the first number is the minimum.
      for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minimumValue) {
          minimumValue = numbers[i]; // Update minimumValue if we find a smaller number.
        }
      } return minimumValue 
    };

19. Write a function that checks if a given string contains the letter 'a'.
  - const containsLetterA = (str) => {return str.includes('a') || str.includes('A');};

20. Create a function that takes two strings as arguments and concatenates them.
  - const concatenateStrings = (str1, str2) => {return str1 + str2;};

21. Write a function that calculates the area of a circle given its radius.
  - const calculateCircleArea = (radius) => {
      if (radius < 0) {
        throw new Error("Radius cannot be negative.");
      }
      const pi = Math.PI;
      const area = pi * (radius ** 2);
      return area;
    };

22. Create a function that takes an array of numbers and returns a new array with only the even numbers.
  - const filterEvenNumbers = (numbers) => {return numbers.filter((number) => number % 2 === 0);};

23. Write a function that counts the number of vowels in a string.
  - const countVowels = (str) => {
      const vowelRegex = /[aeiouAEIOU]/g;
      const vowelMatches = str.match(vowelRegex);
      return vowelMatches ? vowelMatches.length : 0;   
    };

24. Create a function that takes an array of numbers and returns a new array with the numbers in reverse order.
  - const reverseArray = (arr) => { return arr.reverse(); };

25. Write a function that checks if a given string is a valid email address.
  - const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

26. Create a function that takes two numbers as arguments and returns the larger of the two.
  - const findLargerNumber = (num1, num2) => {return Math.max(num1, num2);};

27. Write a function that generates a random password of a specified length.
  - const generateRandomPassword = (length) => {
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      return password;
    };

28. Create a function that takes an array of strings and returns a new array with only the strings that contain more than 5 characters.
  - const filterStringsByLength = (stringArray) => {
      return stringArray.filter((str) => str.length > 5);
    };

29. Write a function that calculates the area of a triangle given its base and height.
  - const calculateTriangleArea = (base, height) => {return (base * height) / 2;};

30. Create a function that takes an array of numbers and returns the product of all the numbers in the array.
  - const calculateProduct = (numberArray) => {
      return numberArray.reduce((product, number) => product * number, 1);
    };
