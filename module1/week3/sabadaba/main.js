//1.- hosting 

/**
 *  let point = 0;
 *  let leve = 1;
 *  const gravedad = 0.2 //
 */

//find
const newArr=[0,1,2,3]
//console.log("PerroNuevo",perro)

//scope global!!!

let perro = "Nova"
const gato = "Tyr"

console.log("Perro!!!!",perro)
//var carlos = "Pedro"
/**
 *              sumar?: => (?: blablabla) que es un valor opcional 
 *  function nameFunction(arg?){
    //... codigo 

    //la funcion esta retornando un valor por defecto y este es el: undefined
    }
 */
function namePerro(){ //inicia
    //scope function
    //const gato = "Loki"
    var carlos = "Carlos"
    console.log("estoy dentro de la funcion!!",carlos)
    return "Hola perros"
}//termina





console.log("Que regresa?",namePerro())

console.log("puedo acceder a GAto?",gato)

//console.log("que hay",carlos)



const gorila = "Dylan"

const dylan = { } //object
const kain = [ ] //array

function nameGorila(/*gorila*/){
    const gorila = "Pancha"

    return gorila
}
console.log("Gorila",gorila)
console.log("pancha?",nameGorila("dylan"))


var message = "Esta es mi carta de renuncia!! ya fue"//declarar

console.log("redeclaracion1",message)
var message = 23456789 //re-declarando y automaticamente estoy asignando un nuevo valor
console.log("redeclaracion2",message)
message = "pagame mas!!!!" //(=)asignando un nuevo valor


console.log("redeclaracion3",message)


thor = 1234 //se comporta como var
var thor = "Thor el perro"

console.log("que pasa?",thor)

const nuevoArreglo = [0,perro,09]

nuevoArreglo.push("dylan")

console.log("nuevoArregñlo",nuevoArreglo)
//si tienes una const con un type objeto o array nunca me cambies su type inicial 
// array o object
// objeto/array = objectoNuevo/arregloNuevo <= esta prohibido
/**
 * var = redeclarar, reasignar puede o poner (en el doc) "Se utilizaba para definir variables globales ";
 * let = no se redeclara, reasigna;
 * const = no se redelara, no-resigna
 */


for(var i = 0  ; i < 10 ; i++ ){
    console.log("dentro i:",i)
}
console.log("fuera del for[1]:",i)

for( i; i <= 20; i++){
    console.log("dentro i[2]:",i)

}

console.log("fuera del for[2]:",i)




poseidon = "Aquaman barbon";

const sexy = "Chayanne";

console.log("podemos acceder a poseidon???", window.poseidon)

console.log("Encontra al sexy???", window.sexy)


console.log("esta dentro de un hmtl",window)

//1.-
//vamosaCasa() <== wrong



let vamosaComer = function (){
    return "ensalda de carne frias"
}

if( vamosaComer() !== '' ){
    console.log("ok")
}

let vamosaCasa = ()=>{
}


//2.- ok
let comida = vamosaComer()


let a = 1 ;
let b = 3;

function otraFuncion(pedro){
   //debugger
    console.log("que es?",pedro)
     a = 4; //dando un nuevo valor a la variable "a goblal"
    let b= 5; // declando una nueva variable "b dentro del scope local/function"( solo vivie dentro de la funcion)

}

otraFuncion("dylan sexy")
console.log("a:",a)
console.log("b:",b)



function sumarAvgMovies(params){

    console.log("que rayos son??",params)

}


//se ejecuta el test? 
sumarAvgMovies(["8.9","9.0","10"])


//try catch(erro)
try{
    //aqui va mi codig
    let suma2 = 40 + 50
    console.log("una suma",suma2)
    asdsadsadasdsadsadsaydgasydgasfdt7fasç
    console.log("dylan123123123")
}catch(error){
    console.log("el error",error)
}


class Hero{
    constructor(){
        this.name="Dylan"
        this.level=100;
        this.strength=1000
    }
            //undefined
    golpea(item){
        try{
         let siGolpeo = item.lifepoint - this.strength
         
        let perrito = 156789

         if(siGolpeo >= 100){
             console.log("se muere")
         }



         perritos -= 10;


        }catch(error){
            console.log("el error",error)
            this.level -= 10
        }
    }
}


function emma(){
    setTimeout(()=>{
        console.log("el termina en 10s")

    },10000)
}

function arturo(){
    setTimeout(()=>{
        console.log("el termina en 30 seg")

    },30000)
}

function mapy(){
    setTimeout(()=>{
        console.log("ella termina en 15s")

    },15000)

    //setTimeout()
    //setTiemeout(()=>{},timeMS)
}
//async function nombre/anonima (){}
async function perroFN(){
    setTimeout(()=>{
        console.log("Hola mundo")
        return "Hola mundo"

    },50000)
}

arturo()
perroFN()
mapy()
emma()

//1.-emma
//2.-mapy
//3.-artur
//4.-Holamundo

//1.-emma
//2.-mapy
// 3.- Holamundo
//3.-artur



function perrito1(callback){
    console.log("me ejecuto")
    callback()
}
function fbExample(){
    console.log("soy un callback")
}

perrito1( ()=>{ console.log("Soy Dylan")} )



//const timeoutExmaple = setTimeout(fbExample, 10000) 
const timeoutExmaple = setTimeout(()=>{
    console.log("estoy dentro del ejemplo", 4 +5 )
},10000) 

console.log("que es timeout",timeoutExmaple)
/**
 *  que pasa cuando acumulamos una timeout y un setinterval en una variable
 *  se guarda su ID para poderlo idententificar para pausarlo borrarlo
 */

clearTimeout(timeoutExmaple)


const interEx = setInterval(()=>{
    console.log("soy bien pro")
},1000)

console.log("que es interval",interEx)

setTimeout(()=>{
    clearInterval(interEx)
    console.log("ya pare la alarma")
},10000)