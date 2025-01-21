const {test,expect} = require('@playwright/test')
//require is building function in JS,which is easiest way to include modules 
//const{test,expect} is came from -> node_modulle
// test = test function to declear the test , expect = expect function is to write assertion
// await operator is used to wait for a Promise and get its fulfillment value.It can only be used inside an async function or at the top level of a module

test("My 1st test",async function({page})
{
    expect(12).toBe(12)
})

test.skip("My 2nde test", async function({page})
{
    expect(100).toBe(110)
})
test("My 3rd test",async function({page})
{
    expect("Nafisa Tonni").toContain("Nafisa")
})