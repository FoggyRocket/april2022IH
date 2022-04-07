
//inicio  comentar codigo

//Esta var es para almacenar el nombre de mi perrro

/*
  Multilinea de comentario
  perro = String
*/

console.log("Hola mundo, me llamo Dylan")


/*
  variables
  var = reutilizar,
  let = reutilizar
  const = unicamente lectura 

  const list = ["Valentin","Ana","Xchell","Nova","Thor"]
  [] => array
  {} => Object

*/ 

const list = ["Valentin","Ana","Xchell","Nova","Thor"]
console.log("Lista1",list)
 list.push("Emma")

console.log("Lista2",list)
//si se puede agregar un valor aun {} && [] 
//pero no se puede cambiar el valor de una const definida antes


//Let

let student; 
console.log("que rayos es?1",student)

student = "Arturo"

console.log("que rayos es?1",student)

/*
  function nameFunction(name,age,price){

    return "mi nombre es:" + name + "Mi edad:" + age +"mi precio:" + price
  }

   nameFunction("Arturo",25,"$25,000")
*/
  

function changeName(name){
  let student;
  student = name
  console.log("dentro de la funcion",student)
}
//invocamos a la funcion 
changeName("Xchell")

console.log("student?????",student)

let perro; //undefined
let myAge = 29;
//multiples

let carro,avion,barco;
let celular=5586814383,email="dylan.torres@ironhack.com"

console.log("email",email)
//naming a variable
 let a; //no lo recomiendo!!!!!!!!!!
 let color;
let $button;
let dylan29;
let _Perro;
let a_large_name;
let dylanTorresCruz;
let π;
let scope 
// palabras reservas;
//let let
//let delete 
//let function
//let for 
//let if
//let new

let favoriteFood;
favoriteFood = "ceviche"

console.log("que es tu comida?",favoriteFood)

favoriteFood = "Tacos de Cabeza"

console.log("que es tu comida?2",favoriteFood)

favoriteFood = 1234567890

console.log("que es tu comida?3",favoriteFood)


const ctx = "context"
/*

*/
 let nombre_complet_apellidos = "Dylan Torres Cruz"

 const username = nombre_complet_apellidos


// Segunda parte
/*
number = 1, 2.09123, 10000, -1
string = "comillas dobles", 'comillas sencillas', `backticks`
boolean = true, false
null = null,
undefined = undefined
symbol = %(Modulo), &&(and), ||(or), !(negacion), => (arrow function),"condicion"? "true":"false" (if ternario)
*/


console.log("Hola ",perro,"color's", 'kain me dijo "perro" ', )


console.log(`Hola mi nombre es:${favoriteFood}`)

let letter = "";

let example1 = "Querido."

let completeLetter = letter + example1

let example2 = "Arturo"
console.log(letter +" "+ example1)

console.log(completeLetter)
// example1 = example1 + exmaple2
example1 += example2

console.log(example1)

console.log(`${example1} perro` + example2)

//chartAt()
//0123456789
//Querido.Arturo
console.log(example1.charAt(0))

//array = [a,b,c,d]
//array[2] = c

console.log(example1[7])
//Metodo === funcion  ()
console.log( example1.slice(8,11) )
console.log( example1.slice(8) )
//solo primero y ultimo
console.log(example1[0], example1[13])
//for 
//includes [] || str == true || false 
let mapy = "Hola como estan, Nova,  clase muchas cosas!!! etc..."

console.log( mapy.includes("dylan") ) // false
console.log( mapy.includes("nova") ) // false
console.log( mapy.includes("Nova") ) // true
if(mapy.includes("Nova") ){
  
}

// split join comparar

let name2 = "Carlos"
let name3 = "Azdhy"
//.localeCompare()
// = asignacion 
// == 0 == "0" compara si los dos son lo mismo
// === // 0 === 0  compara el tipo de dato y el valor
let newName = name2.split('')
//
console.log(name2.split(''))
console.log(newName.reverse())
// en los dias lunes me levanto por la mañana

newName = newName.join('')
console.log(newName)

let str1 ="en los dias lunes me levanto por la mañana"

str1 = str1.split(" ")
console.log(str1)
//for(let i= 0; i <= str1.length ; i++) 
//forEach  str1.forEach((item,index,arrOriginl)=>{ })
//map == regresa un nuevo array

str1 = str1.map((item,index)=>{

  return item[0]
})

console.log("perro",str1.join(""))





