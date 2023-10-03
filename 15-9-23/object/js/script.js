// const person = {
//     name: "Gayatri",
//     age: 23,
//     city: "Hyderabad",
//     math:90,
//     physics: 100,
//     start: function(){console.log("Exam started")}
// } 

// console.log(person.name)

// console.log(person.math + person.physics)

// person.math = 70

// person.js = 45
// console.log(person.start())

// constructor
// function Person(name, age){
//     this.name = name,
//     this.age = age
// }

// const person = new Person("Gayatri", 23)
// console.log(person)


// const person = {
//         name: "Gayatri",
//         age: 23,
//         city: "Hyderabad",
//         subjects: {math:30, physics:50}
// } 

// person.subjects = {
//     math:30,
//     physics: 50
// }

// console.log(person)

// console.log(person.subjects.math + person.subjects.physics)

// for(let key in person){
    // console.log(`${key} : ${person[key]}`)
    // console.log(key, person[key])

//     if(key == "subjects"){
//         for(let sub in person.subjects){

//             console.log(`${sub} : ${person.subjects[sub]}`)
//         }
        
//     }
//     else{
//         console.log(`${key} : ${person[key]}`)   
//     }
// }

// let cal = {
//     add: function(a,b){return a+b},
//     sub: function(a,b){return a-b}
// }

// console.log(cal.add(2,5))
// console.log(cal.sub(6,2))

// let persone = {
//     name: "Gayatri",
//     age: 22
// }

// let {name, age}  = persone
// console.log(age)

// object short hand
// let fname = "gayatri"
// let age = 22
// let subjects = {math: 20, science: 30}

// let persone ={
//     fname,
//     age,
//     subjects
// }

// console.log(persone) 


// object method short hand
let fname = "gayatri"
let age = 22

// function greet(){
//     return `Hello ${fname} and age is ${age}`
// }

// let persone ={
//     fname,
//     age,
//     greet
// }

// console.log(persone.greet(fname, age)) 

// let person ={
//     fname : "Gayatri",
//     age : 22,
// }

// console.log(Object.keys(person))
// console.log(Object.values(person))

// let firstname = "name"
// let person1 = {
//     [firstname]: "alex"
// }

// console.log(person1)

console.log(typeof [2,3,4,5])
console.log(typeof null)
console.log(typeof NaN)
console.log(typeof 0/0)