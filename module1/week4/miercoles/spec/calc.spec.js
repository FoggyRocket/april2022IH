//importar nuestro archivo de calc
// ./ indica en este mismo nivel
// ../ indica salte un nivel atras 
const sum = require("../src/calc");


describe("The function sum() used in the Calculator",()=>{
    //ya van mis test
    it("Should be a function",()=>{
        expect(typeof sum).toBe("function")
    })
    //it a la n!
    //it("Discription",()=>{})

    it("Should return 0 for an empty array",()=>{
       expect( sum([]) ).toBe(0) 
    })

    it("Should return 27 for array with 3 elements",()=>{
        //10,17
        expect( sum([9,9,9]) ).toBe(27)
    })

})