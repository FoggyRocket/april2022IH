const { multiply } = require("../calculator");
// ../ salir un nivel
// ./  este mismo nivel
// ()=>{}  //arrowFunction funcion anomima


describe("Multiplica", ()=>{
    test("Mandame 2 positivos", ()=>{
        const result = multiply(5,3)

        expect(result).toBe(6)
    })
})

function nameFunction(params){
    //... codigo 

    return "asd"
}
nameFunction()
//anonima
//Callback

(function (){
    //codigo
    return "falso "
})()

// arrowFunction
(() => {
    //
})()
// se almacenan en variables let const var

let perro = () =>{
    //
    return "Nova"
}

let gato = function(){
    return "gato"
}

perro()
gato()