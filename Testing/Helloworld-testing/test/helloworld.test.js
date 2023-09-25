const assert = require('chai').assert;
const checkHello = require('../src/helloworld');

// let ptag = document.getElementById("p_tag");

// let ptag = "Hello world"

// it("Should return hello world",()=>{
//     const result = checkHello(ptag)
//     assert.equal(result, false)
// })


let userInput = document.getElementById("userTxt");

it("Should return user text", ()=>{
    const res = checkHello(userInput).value
    assert.equal(res, "apple")
})