const assert = require('chai').assert;
// const add = require('../src/addition');
// describe('Addition Function',()=>
// {
//     it("Should add two positive numbers correctly",()=>{
//         const result = add(10,10)
//         assert.equal(result,20)
//     })

//     it("Should add two negative numbers correctly",()=>{
//         const result = add(-10,-10)
//         assert.equal(result,-20)
//     })
// })

it('Should return true', ()=>{
    // assert.strictEqual(true, true)
    // assert.strictEqual(0, 2)
    // assert.strictEqual("2", "2")
    // assert.strictEqual({'key':'value'}, {'key':'value'})

    // assert.include("gayatri@gmail.com", "@gmail.com")

    // assert.typeOf('2',2)

    // assert.deepEqual({1:101}, {1:101})
    // assert.isAbove(10,0)
    assert.isBelow(-10,0)
});