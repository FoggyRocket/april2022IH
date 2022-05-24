//Async / await

//asycn function 

async function nova(){
    return "nova"
}

const myDog = async ()=>{}

console.log("Function nova", nova() )


const directions = [
    "Starting point: Ironhack Paris",
    "← Head northwest on Bd Voltaire toward Rue Léon Frot",
    "← Turn left onto Rue Chanzy",
    "* Café Titon, 34 Rue Titon, 75011 Paris, France"
  ];

  function obtainDirections(step) {
    return new Promise ( (resolve, reject) => {
      // setTimeout(() => {
        console.log( directions[step] );
        if (!directions[step]) reject("Instructions not found.")
        else resolve(directions[step] );
      // }, 2000);
    })
  }


  function perro2(perro) {
    return new Promise ( (resolve, reject) => {
      setTimeout(() => {
        console.log( perro);
        if (!perro) reject("perro not found.")
        else resolve(28);
        }, 2000);
    })
  }

  //Ejemplo de async / await synchrono
/*
  perro2("thor")
  .then(value=> console.log(value))

  obtainDirections(0)
  .then(()=>{})
  //.catch(error=>console.log("error",error)

  //direction
  //todo ok!
*/

  //forma de utilizar async && await
  //v1
   async function getCoffee(){
        
        await obtainDirections(10)
        await perro2("thor")
        console.log("You arraibed at your destination!")
  }


  //getCoffee()

  //try && catch


  //handle Error 

  async function getAnotherCoffee(){
      try{
           await obtainDirections(0)
           await obtainDirections(1)
           await obtainDirections(2)
           await obtainDirections(3)
           console.log("You arraibed at your destination!")
      }catch(error){
          console.log("error GetAntoherCoffee",error)
      }
  }

getAnotherCoffee()
console.log("todo Chido!!")


async function sum(){
    try{
        //let count = 0;
        // perro2("thor").then(value=> count=value)
        let count = await perro2("thor")
        console.log("count",count)
         if(count >=28){
             console.log("funciona")
         }else{
             console.log("No sirve")
         }


    }catch(error){
        console.log("erro",error)
    }
}

sum()


//Fetch vs Axios
fetch("https://rickandmortyapi.com/api/character/1")
.then((response)=>{
    console.log("que es el response",response)
    return response.json()
})
.then((jsonResponse)=>{
    console.log("que es JSON",jsonResponse)
})
.catch((error)=>console.log("el error",error))


async function getCharacter(){
    try{
        const response = await fetch("https://rickandmortyapi.com/api/character/2")
        const responseJson = await response.json()

        console.log("personaje?",responseJson)
    }catch(error){
        console.log("error",error)
    }
}
getCharacter()