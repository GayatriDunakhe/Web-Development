## Gayatri Dunakhe
## wave2-b1-python

**Regular Function:**

1. What is a regular function in JavaScript?
- Regular function is simple function which define by using "function" keyword followed by function name with opening and closing round brackets

2. How do you define a regular function in JavaScript?
- Syntax- function funName(){//funtion head
            //function body
          }

3. What is the difference between a function declaration and a function expression?
- Funtion declaration-
    * It declared with "function" keyword
    * We can use it before declare it
    * function funName(){//funtion head
            //function body
      }
- Function expression -
    * It can be created by assigning the function to the varaiable
    * We can't use it before declaring it
    * It's a anonymous function
    * Also it creates dynamic functions
    * const myFunction = function() {
        // function body
      };

4. Can you call a regular function before declaring it in your code?
- Yes, we can call a regular function before declaring it in code
- Ex- 
    printHello();
    function printHello(){
        console.log("Hello!");
    }

5. How do you return a value from a regular function in JavaScript?
- We can return a value from a regular funtion by using "return" keyword
- Ex- 
    function printSum(a,b){
        return a+b;
    }
    let res = printSum(2,4);
    console.log(res)

**Arrow Function:**

6. What is an arrow function in JavaScript?
- It's a short form of writing function
- Which are easy to understand and more readable
- It also called as anonymous functions
- This functions have no name

7. How do you define an arrow function?
- Syntax - const funName = (parameters) => {
                // function body
            };

8. What are the key differences between arrow functions and regular functions?
- Arrow Function-
    * No need of "funtion" keyword for declaration of function
    * Don't have there own arguments
    * Implictly return the single expression
    * const add = (a,b) => a+b;

- Regular Function-
    * It use the "function" keyword
    * It's has there own arguments
    * Need to explictly use the return statment for returning the values
    * function add(a,b){
        return a+b
    } 
    let res = add(2,3)
    console.log(res)

9. Do arrow functions have their own "this" context?
- No, Arrow fucntion has not their own "this" context
- It capture the value of "this" from their surrounding lexical context

10. Can arrow functions be used as methods in objects?
- Yes, we can use arrow fucntions as methods in objects

**Anonymous Function:**

11. What is an anonymous function in JavaScript?
- The function without name
- Same like function expression but it doesnot use function name in expression to declear 

12. How do you define an anonymous function?
- Syntax - const funName = function(){
                // function body
           }

13. Can you name an anonymous function later in your code?
- We can't name the anonymous function after it has been defined. 

14. What is the main use case for anonymous functions in JavaScript?
- The main use of anonymous function is define the function where they needed without seperate decleartion of the fucntion with name
- Also use in callback function and immediately invoked function expression

15. What is the advantage of using named functions over anonymous functions?
- Name functions can be reusable
- Name functions are easy to understand with there decriptive names
- For debuging and testing name functions are helpful rather then anonymous functions

**Function Expression:**

16. What is a function expression in JavaScript?
- It can be created by assigning the function to the varaiable
- We can't use it before declaring it
- It's a anonymous function
- Also it creates dynamic functions

17. How is a function expression different from a function declaration?
- Syntax - const myFunction = function() {
                // function body
            };

18. Can you invoke a function expression before defining it in your code?
- No, we can't invoke a function expression before defininf it in code 

19. What are some common use cases for function expressions?
- Function expression is use in callback functions
- It is used in higer order function take a function as a parameter and then return the result as a function.
- It is also used in dynamic function creation

20. What is a named function expression, and when would you use it?
- The named function expression is the where the function with name
- Ex- const add = function calculation(a,b){
            return a+b;
        }
- This named fucntion expression is useful for self-reference, for clarity and debugging 

**Generator Function:**

21. What is a generator function in JavaScript?
- It's a special type of function which allows us to pause the execution by using "yield" keyword and then again we can resume it.

22. How do you define a generator function?
- Syntax- function* funGenerator(){
                yield 1;
                yield 2;
                yield 3;
           }

23. What is the purpose of the "yield" keyword in a generator function?
- The "yield" keyword was use for two purpose-
    * Pausing the execuation
    * Processing the values

- Pausing the execuation- when yield statment is encounter in function, the function execuation is pause at that time.
- Processing the values - yield keyword specifiy the value to return to the calling code

24. How do you iterate over the values generated by a generator function?
- function* funGenerted(){
    yield 1;
    yield 2;
    yield 3;
  }

  for(let i of funGenerted()){
    console.log(i)
  }

25. What are some advantages of using generator functions?
- Generator function use to implement complex flow control pattersn
- It also help in error handling with there centeralized error handling logic
- It help to create cleaner and more readable asynchronous code by breaking it into smaller, more manageable chunks.
- It also help in creation of custom iterators.

**Callback Function:**

26. What is a callback function in JavaScript?
- It is a function that the another function passed as an argument to function

27. Why are callback functions commonly used in asynchronous programming?
- It provide non blocking code executions
- It help in event handling
- It also help in parallel execution 

28. Can you pass a function as an argument to another function in JavaScript?
- Yes, we can pass a function as an argument to another function

29. Give an example of a callback function being used in an asynchronous operation, like a setTimeout.
-  function greetings(name, funCallBack){
        setTimeout(function(){
            const greet = `Hello ${name}`;
            funCallBack(greet)
        }, 2000)
    }
    function handelGreet(greetings){
        console.log(greetings)
    }
    console.log("Befor timeout")
    greetings("gayatri", handelGreet)
    console.log("After timeout")

30. How do you handle errors in callback functions?
- Error-First callback- 
    * It is a function which either returns an error object or any successful data returned by the function.
    * The first argument in the function is reserved for the error object.
    * The second argument of the callback function is reserved for any successful data returned by the function.
- Try catch with callback-
    * Inside the callback function, we can used a try and catch block to catch and handle errors that occur during asynchronous operations.  

**Recursive Function:**

31. What is a recursive function in JavaScript?
- It is a function that calls itself during its execution.
- Syntax - function funRecursive(){
                return funRecursive(n);
            }

32. How does a recursive function differ from an iterative one?
- Recursive function -
    * It solving problem by dividing the task in sub program and calling them recursively
    * It relies on the call stack to manage the control flow
    * space complexity is higher bcz each recursive call create new stack frame

- Iterative-
    * It solving problem by using loops
    * It uses the loop control flow
    * It has less space complexity bcz it doesn't relies on the call stack frames


33. Provide an example of a recursive function and explain its purpose.
- Ex- function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    
    return fibonacci(n - 1) + fibonacci(n - 2);
    }
- Purose of recursive function - The purpose of a recursive function is to solve a complex problem by breaking it down into smaller, more manageable subproblems of the same type. 

34. What is the base case in a recursive function, and why is it important?
- The base case in a recursive function is a condition or set of conditions that determines when the recursion should stop. 
- It's a fundamental part of recursive algorithms and serves as the termination condition that prevents infinite recursion.

35. What are the potential drawbacks of using recursive functions in JavaScript?
- Stack overflow- 
    * If the recursion goes too deep without reaching a base case, it can lead to a stack overflow, causing the program to crash.
- Performance Overhead- 
    * when dealing with large data sets or deeply nested recursive calls
- Memory Usage - 
    *  It consume more memory because each function call creates a new stack frame to store local variables and state
