// intro recap!!! 


//necesito mi canvas!!
const canvas = document.getElementById("myCanvas"); //<canvas/>
//quiero el context
const ctx = canvas.getContext("2d")


// estamos recordando cosas de la clase pasada!!!
//add image
// class Hero {}
const demo1 = new Image();
demo1.src = "https://bit.ly/2L7yH3f"; //asignar o actualizar

//Mostrarla
demo1.onload = () => {
    //drawImage(imagen,x,y,w,h)
    ctx.drawImage(demo1,100,100,250,250)
}


//class

class Perro{
    //propiedades!
    constructor(){
        //van mis propiedades
        this.name = "Nova"
        
    }

    //methods
    perro(){

    }

    getABeer(){
        this.perro()
        return "Vamos por un cheve"
    }
}


const perro = new Perro() 

//actua ahora como un objeto!
console.log(perro.name) //-> Nova

console.log(perro.getABeer() ) //->"Vamos por un cheve"


console.log()