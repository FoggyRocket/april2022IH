let perro = undefined; // lo veremos mas en el videojuego!!


//if(condicion){}

//Cadenero

let dylan = {
    age:21,
    id:false,
}

if(dylan.age >= 21){
    //verdadero
    console.log("podemos entrar al bar")
}else{
    //falso 
    console.log("Eres muy joven")
}


if(dylan.age >= 21 || dylan.id === true ){
    console.log("cumples con alguna regla")
}else{
    console.log("no cumples con ninguna")
}

if(dylan.age >= 21 && !dylan.id){
    console.log("cumples con ambas",!dylan.id)
}else{
    console.log("no cumples con ninguna",dylan.id,dylan.age)
}

let city = "mexico"
console.log("city!!!",city[0])
city = city.split("")//no afecta la variable original
city[0] = "M"

city = city.join("") //no afecta la variable original
console.log("city1!!!",city)
//split join splice //puden googlear


// Math.floor(). ==> interger
// Math.random() ==> 0.12345 ....  0.9999999999
// Math.random() * (max - min) + min 
//Math.floor( 1.7890   )
//Math.floor( Math.random() * (max - min) ) + min

console.log( Math.random()  )
console.log(Math.floor( Math.random() * (5 -1) ) + 1  )


//if(condicion){...}else{...}

/*

switch(key){
  case 1:
  break;
  case 2:
  ...
  break
  case 3:
  break
  default:
  break
}

*/


/*
menu
 a) Gorditas
 b) Chilakiles
 c) huarache
*/
                      // a b c 
function selectedMenu(option){
      // a b c 
  switch(option){
    case "a":
      console.log("Mandamos unas Gorditas")
      break
    case "b":
      console.log("unos Chilakiles sin crema");
      break 
    case "c":
      console.log("Huarache sencillo")
      break;
    default:
      console.log("Un vaso de agua")
      break;
  }
}

selectedMenu("a")
            // 0.     1.   2.      3.   4  5. 6
let newArr = ["dyaln", 29, null, {key:"value"}, [1,2,3,4],true,false ]

for(let i = 0 ;   i < newArr.length ; i++ ){
  console.log("I",newArr[i], i)
  if(newArr[i] === 29){
    console.log("la edad")
  }
}