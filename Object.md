## Objects in JavaScript

In JavaScript, objects are fundamental data types that allow you to store and manipulate collections of data using key-value pairs. Here are some key points and examples to understand objects better:

### Key Points:

1. Objects can be created using `const`, `let`, `var`, or even without these keywords.
2. Objects consist of key-value pairs, where keys are strings (or symbols) and values can be of any data type, including other objects and functions.

### Examples:

#### Example 1:
```javascript
const person = {
    name: "Ashish",
    age: 30
};

console.log(person);
```

#### Example 2:
```javascript
const person = {
    name: "Ashish",
    age: 50
};

console.log(person);
```

### Task 3: Display the 'name' from the object
```javascript
const person = {
    name: "Ashish",
    age: 50
};

console.log(person.name);
```

### Task 4: Add and display total subject marks
```javascript
const person = {
    name: "Ashish",
    age: 50,
    maths: 90,
    physics: 100
};

const totalMarks = person.maths + person.physics;
console.log(totalMarks);
```

### Task 5: Change the 'maths' marks
```javascript
const person = {
    name: "Ashish",
    age: 50,
    maths: 90,
    physics: 100
};

person.maths = 70;
console.log(person.maths);
```

### Task 6: Add 'JavaScript' marks as a new key
```javascript
const person = {
    name: "Ashish",
    age: 50,
    maths: 90,
    physics: 100
};

person.javascript = 100;
console.log(person);
```

### Task 7: Adding a function as a value
```javascript
const person = {
    name: "Ashish",
    age: 50,
    maths: 90,
    physics: 100,
    start: function () {
        console.log("Exam started");
    }
};
```

### Task 8: Creating an object using the 'new' keyword
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person = new Person("Ashish", 30);
console.log(person);
```

### Task 9: Add subjects as an object within the main object
```javascript
const person = {
    name: "Ashish",
    age: 50
};

person.subject = { maths: 30, physics: 50 };
console.log(person);
```

### Task 10: Calculate and display total subject marks
```javascript
const person = {
    name: "Ashish",
    age: 50,
    subject: { maths: 30, physics: 50 }
};

const totalMarks = person.subject.maths + person.subject.physics;
console.log(totalMarks);
```

### Task 11: Display both keys and values from the object
```javascript
const person = {
    name: "Ashish",
    age: 50,
    subject: { maths: 30, physics: 50 }
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

### Task 12: Iterate through a nested object

```javascript
let cal = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    }
};

console.log(cal.add(2, 3));
console.log(cal.sub(2, 3));
```

### Task 13: Object destructuring

```javascript
let person = {
    name: "John",
    age: 31
};

let { name, age } = person;
console.log(name, age);
```

### Task 14: Object shorthand

```javascript
let fname = "Ram";
let age = 28;

let person = {
    fname,
    age
};

console.log(person);
```

### Task 15: Object method shorthand

```javascript
let fname = "Ram";
let age = 28;

function greet(fname, age) {
    return `Hello, my name is ${fname} and I am ${age} years old.`;
}

let person = {
    fname,
    age,
    greet
};

person.fname = "Alex";

console.log(person.greet(person.fname, person.age));
```

### Task 16: Modify a value in the object

```javascript
let person = {
    firstname: "John",
    age: 31
};

person.firstname = "Ram";
console.log(person.firstname);
```

### Task 17: Check if a property/key exists in an object

```javascript
let person = {
    firstname: "John",
    age: 31
};

let propertyName = "name"; // Change to the key you want to check

if (person.hasOwnProperty(propertyName)) {
    console.log(`${propertyName} is a property of the person object.`);
} else {
    console.log(`${propertyName} is not a property of the person object.`);
}
```

