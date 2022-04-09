const objtDylan = {
    name:"Dylan",
    age:29,
    favoriteFood:["Tacos","Mixotes","Gorditas"]
  };
  const listName = ["Xchell","Ana","Emma"];
  let name = "Azdhy";
  //for of  para String o Array
  //for in solo valores 
  // var += 1 /= -= *=
  //for(let i= 0; i <= 100 ; i= i+5 ){};
  
  for(let i= 0; i < name.length ; i++ ){
      console.log(name[i])
  }
  
  for(let key of name){
    console.log("ForOF:",key)
  }
  
  for(let key2 of listName){
    console.log("ForOF2:",key2)
  }
  
  for(let key3 in objtDylan){
    console.log("ForOF3:",key3,"value:",objtDylan[key3])
  }
                        //[]
  console.log("valor", objtDylan.favoriteFood[0] )
  
  
  function comer(alimento){
    //
    return alimento
  }
  
  //1.- fucntion
  //2.- nombreFunction // sin nombre
  //3.- () || (params) // optional parametros
  //4.- {} // adentro de ellos va nuestro codigo y el return 
  
  //como llamamos, ejecutamos o invocamos 
  
  //nombreFunction("Calabazas con queso y elote")
  



function chilesRellenos(ingrediente,ing2,ing3,ing4/*...restoDeLosParametros*/){
  let receta =[];
   receta.push(ingrediente,ing2,ing3,ing4);
  return receta
}

let ingredientes = chilesRellenos("chiles", "queso", "jitomates", "cebolla");
console.log(ingredientes);
//console.log(ingredientes);
rockear("reggeton sabroso")

function saludo(name){
	console.log(`Hola mi nombre es ${name}`)
}
saludo('Vale')

function rockear(genero){
  console.log('si la rifamos',genero)
  //hasta puedes llamnar otras funciones
  saludo('kain')
}

function azdhy(dia,mes,año){
  console.log("Buen fin de semana :D", dia,mes,año)
  return `el dia${dia} del mes ${mes} del año ${año}`
}
azdhy(9,4,2022)
//
function ceviche(pescado,cebolla,limon){
  let a = pescado;
  let b = cebolla;
  let c = limon
  //se le llama reasignacion de variables
  //return (pescado + cebolla / limon)
  return (a+b)/c;                                                                      
}

ceviche(2,3,4)

console.log(`${azdhy(9,4,2022)}`,`hoy comemos ${ceviche(2,3,4)} ceviche`)




function team(favoriteTeam){
  
  console.log( )
  let otro = borussia('Reus')
  return `My favorite team is ${favoriteTeam} ` + otro
}

function borussia(player){

  return `and my favorite player is ${player}`;
} ;

console.log("1:",team('Borussia'));