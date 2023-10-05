Examples:
// Arrow function with Parameter with single statement
const add = (a,b)=> a+b;
console.log(add(20,30))
// Arrow function without Parameter with single statement
const name1 = () => "Gayathri";
console.log(name1())
// Arrow function single Parameter
const value = (x) => x*2;
console.log(value(2))
// Arrow function with Parameter with Multiple statement
const greet = (fname) => {
    const greeting  = `Hello, ${fname}`;
    return greeting;
}
console.log(greet('Gayathri'))
// Arrow function with Object
const person ={
    fname: 'Rahul',
    sayHi(){ return `Hi , ${this.fname}`}
};
console.log(person.sayHi())
//  Arrow function with default parameter
const power = (x,y=2)=> Math.pow(x,y);
console.log(power(3))
// Arrow function with map function
const numbers = [1,2,3,4]
const s = numbers.map((x) => x*3);
console.log(s)
// Arrow function with filter function
const numbers1 = [1,2,3,4]
const s1 = numbers.filter((x) => x%2==0);
console.log(s1)
// Arrow function with reduce function
const numbers3 = [1,2,3,4]
const s3 = numbers3.reduce((x,y) => x*y);
console.log(s3)
//  Arrow function with Rest Parameter
const sum =(...args)=> args.reduce((acc,val)=>acc+val)
console.log(sum(1,2,3,5,6,7,7,8))







