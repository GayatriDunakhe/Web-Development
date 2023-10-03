const assert = require('chai').assert;
const add = require('../src/calculator');
describe('Addition Function',()=>
{
    it("Should add two positive numbers correctly",()=>{
        const result = add(10,10)
        assert.equal(result,20)
    })

    it("Should add two negative numbers correctly",()=>{
        const result = add(-10,-10)
        assert.equal(result,-20)
    })

    it("Should add one negative number correctly",()=>{
        const result = add(10,-10)
        assert.equal(result,0)
    })
})