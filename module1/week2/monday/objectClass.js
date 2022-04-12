//Object

//let perritos = new Object() ==> { }

let gatitos = {} 
let newArray = ["Dylan", "Torres",29]
let dylan = {
  name100:"Dylan",
  lastName:"Torres",
  "age":29,
  "friend list":["Yafte","Xchell","Valentin","Kain"],
  eat:function (){
    return "Dylan come Lechuga"
  },
  /*
  cuando colocamos llaves {} si nuestra funcion retorna un valor, debemos colcar la palabra return
   eat:()=>{ 
    return "Dylan come Lechuga"
  }
    tiene un return implícito
  eat:()=>"Dylan come lechuga"
*/
  pet:{
    name:"Nova",
    age:2,
    breed:"Beagle",
    family:{
      otro:[1,2,3,4,5,6,7]
    }
  },
  single:false,
  moto:undefined,
  car:null
}

            //{} // {}  //[] // 5
console.log(dylan.pet.family.otro[4])
console.log(dylan["friend list"])

for(let nova in dylan){
                                  //nova = 
  console.log("key:",nova,", value:",dylan[nova] )
}


// []
// .nameKey
//ejecuar invocar o llamar  ()
console.log( dylan.eat() )

//add value  
// Objecto.perro = "gatito"
// Objecto["otroGato"] = "gato"

dylan.dance = true
let newValue = "Bailes" //=> dinamico
dylan["fanCat"] = false
dylan[newValue] = ["Salsa","Cumbias","Huapangos","Folclor","Breakdance"]
//dylan.newValue = ["Salsa","Cumbias","Huapangos","Folclor","Breakdance"]
newValue = "Perrote"
dylan[newValue] = "Foggy"

//add function
dylan.drinks = () => {
  return "Brandy"
}

dylan.dance = false
console.log("dylan2:",dylan)

//sabemos si existe la llave
console.log('drinks' in dylan)
// {} || {key:"value"}
// [] || [1,2,3,4]
//Object.keys({}) == nos crea un array con todas las llaves del objeto
// {} || [] ==> pasa
if(Object.keys(dylan).length ){
  console.log("esta lleno?",Object.keys(dylan) )
console.log("esta lleno?2",Object.values(dylan) )

  
}else{
  console.log("no tengo nada :( ")
}


//CRUD
//CREATE
let newObj = {}
newObj.name = "XCHELL"
//READ
newObj.name
newObj["name"]
console.log("read",newObj["name"])
//UPDATE
newObj.name = "Ana"
newObj["name"] = "A"
console.log("update",newObj)
//DELETE
delete newObj.name
delete newObj["name"]
console.log("delete",newObj)


dylan.pet
//buscamos si existe la lleve
console.log("perritos" in dylan )
if("perritos" in dylan ){
  
   console.log("existe",dylan.perritos)
}else{
  console.log("no existe")
}

let xchell =["xchell",29,"America"]
let mapy =["mapy",29,"pumas"]
let arturo =["arturo",29,"America"]


let azdhy = [29,"Chivas","azdhy"]