//var let const
const fullName = "Dylan Torres"
let age = 29;

//function
//nombre
//() || (a,b,c)
//{}
//dentro las llaves el codigo que haremos
let a = "Dylan", b="Xchell";

function calSum(a, b){
  return a + b
}
//Como ejecuto la funcion? 

calSum(12,12)
let laSuma = calSum(12,12)
console.log( calSum(12,12), laSuma)
//

//Params default!

function saludar(name = "Vale",perro = [0,1,2,3]){
  console.log(`Hola como estas ${name}!`,perro)
  console.log("perrito", name) //=>
}


let perrito = undefined




saludar(perrito,10)
// name ? name : "vale"




function exampleCallback( unaFuncion ){
  console.log("dentro de exampleCallback", typeof unaFuncion)
  
  // nombre()
  unaFuncion("dylan",{name:"Perro"})
  
} 

exampleCallback(saludar)

let newArray = [1,2,3,4,5]

function eatDinner(funct) {
  
  //setTimeout cuando me voy a ejecutar // una vez
  //setInterval cada cuanto quieres que me ejecute // muchas veces
 //setTimeout( ()=>{}, time )
  setTimeout(()=>{
    console.log('Eating the dinner!');
  },  5000)
  
}
 
function eatDessert() {
  console.log('Eating the dessert!');
}

eatDinner(); // <== Eating the dessert!); // <== Eating the dinner!
eatDessert();//




 function tokenFun(){
   //setInterval( ()=>{}, time )

    let tokenTimer = setInterval(()=>{
          // Math.floor(Math.random() * (max - min ) ) + min => range
          let token = Math.floor(Math.random() * (25 - 1)) + 1
          console.log("el token",token)
    }, 10000)

   //clearInterval(tokenTimer )
 }

/*
(function (a,b){
  
  return a * b
})(1,10)
//arrowFunction
(a,b)=>{
  return a -b
}
*/

let gato = function (a,b){
    return a * b
}
//let huron = (a,b) =>( a + b );
let huron = (a,b) => a + b;

let rino = (a,b)=>{
  //si ponen { } y quieren regresar un valor 
  // tienen que colocar la palabra return
  // si queremos escribir mas codigo dentro de esta funcion
  
  return a * b
}
console.log(rino(2,3) )

//arguments

function gatitos(){
  console.log("Args...",arguments,)
  //es palabra => {"0":"valor","1":"valor ,,, "n":"valor"   }
  console.log(arguments[1])
}


gatitos("Xchell","Vale","Gato","Gatito")

