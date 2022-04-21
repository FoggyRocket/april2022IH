//
// new Object() <== instanceando una clase llamada Object
//var perro = {}  <== creando un objeto

//new Array()
let newArray = [0,1,2,3,4]
let newObj = {
    key1:"value",
    key2:"value"
}

let hero = {
    //propiedades son atriburos de mi objeto 
    name:"Batman",
    lifePoints:100,
    strength:50,
    life:3,
    armor:true,
    //metodos o funciones! mas metodos
            // {}
    batiDog(){
        return "woof"
    },
    callAlfred:function (){
        console.log("Su status es:",this)
    },
    batiPunch:function (enemy){
                            //50
        enemy.lifePoints -= this.strength
        //this
        console.log("baaan!!",)
    },
    batiKick : function (enemy){
        enemy.lifePoints -= ( this.strength + 100)
        console.log("puuuum!!")

    }
}

let hero2 ={
    //propiedades son atriburos de mi objeto 
    name:"Aquaman",
    lifePoints:50,
    strength:10,
    life:3,
    armor:true,
    //metodos o funciones! mas metodos
            // {}
    aquaPunch:(enemy)=>{
        enemy.lifePoints -= 10
        console.log("baaan!!")
    },
    aquaKick : function (enemy){
        enemy.lifePoints -= 30
        console.log("puuuum!!")

    }
}

let hero3 = {...hero, name:"Dylan"}
let malo = {
    name:"Kain",
    lifePoints:900,
    strength:80,
    life:1,
    armor:false,
    //methods
    warCry:function(){
        //¿sumar vida?
      //  +30
      this.lifePoints += 30 ;
      console.log("jijijiji Me subi vida!!!",this)
    },
            //{name:"dylan",life:3,....}
    animality:function (hero){
        hero.lifePoints -= 30
        console.log("wazaaaa!!")

    }
}


//turno 1 solo para ver sus propiedades iniciales
console.log("hero",hero)
console.log("malo",malo)

//ejecutar un metodo objeto.metodo()
malo.animality(hero)
malo.animality(hero2)

//fin del turno
console.log("hero2",hero)

//turno 2/hero

hero.batiPunch(malo)

console.log("malo2",malo)


//
console.log("hero3",hero)
console.log("malo3",malo)

hero.callAlfred()
malo.warCry()










/*
funciones anonimas

function (){}
    ()=>{}
*/

//let gato = function unNombreSuperChingo(){
    //console.log("Mi nombre de funcion es pro!!!")
//}

//1.- 

//unNombreSuperChingo()

//2.-
//gato()

//console.log("que es",gato)