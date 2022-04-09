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
  