//getElementsByClassName() => [<>,<>,...]
//querySelector() => <> </> //el primero que encuentra
//getElementById() => <> </> // el elemento con ese ID 
//querySelectorAll() => [#id,.class,<perro>,...HTMLCollection]

                        //getElementById("idTag")
const cvDemo = document.getElementById("myCanvas")

//cvDemo = <canvas id="myCanvas" width height>

//input.value 
//context para poder dibujar, insertar todo lo que quieran!!!!
const context = cvDemo.getContext("2d")

console.log("context",context)


//dibuajremos un rectangulo!!!

//button -> btn 

context.fillStyle ="salmon"
            //x,y,width,height
context.fillRect(20,100,100,100) //nos crea un nuevo trazo con border y relleno de color
context.clearRect(45,125,50,50) // nos crea un nueco trazo sin border y sin relleno (blanco)
context.strokeRect(57,138,25,25) // nos crea un nuevo trazo solo con borde sin color de relleno

// draw Path

context.beginPath();// esta nada mas inidica que es el inicio de nuestra trazo!!!

//linia recta!!
            //x,y
context.moveTo(50,50)//colocamos el pen para dibujar en esas coordenadas!!
context.lineTo(250,50)//le decimos hasta donde debe de dibujar el trazo!
context.stroke(); // este indica que le de formato al trazo
//end line x
//line y
context.moveTo(250,50)
context.lineTo(250,150)
context.stroke()

//cerramos nuestro trazo
context.closePath() //ya no quiero dibujar


//usar fill
context.fillStyle ="yellow"

context.beginPath()
context.moveTo(125,125)
context.lineTo(170,125)
context.lineTo(170,62)
context.fill()
context.closePath()

//end triangulo!!!

//ARC

context.beginPath()
//ctx.arc(x,y,radius,startAngle,endAngle,antiClockwise)

context.arc(220,170,65,0,Math.PI * 2);
//context.lineWidth = 20;
//context.fillStyle ="red" -> relleno
context.strokeStyle = "bisque"
context.stroke()
context.closePath()


// Texto uno simple!!!



context.fillStyle="green"//-> cambia el color del relleno
//.font
context.font = "30px Arial"
//add text fillText() || strokeText()
            //fillText("Texto",x,y,maxWidth) //perro?:any es opcional
context.fillText("Este es un texto Chido!",50,45,250)



///insertar una imagen!!!


class Perro{
    constructor(name,color){
        this.name=name;
        this.color=color
    }
}

const perrito = new Perro("Nova","Tri color")

//Image

const img = new Image()
/* img = {
    src:"",
    perrito:()=>{}
}
*/
//existe una propiedad src

img.src = "https://i.picsum.photos/id/852/200/300.jpg?hmac=6IMZOkPF_q5nf8IwfYdfxPUyKnyPL1w8moDjTeMOT5g"

//esto es por unica vez 

img.onload = () => {
    context.globalAlpha = 0.5
                  //(img,x,y,width.height)
    context.drawImage(img,0,0, cvDemo.width, cvDemo.height)// este metodo si es para el juego 
}


const character = new Image()

character.src = "https://i.pinimg.com/originals/8e/bb/02/8ebb021259d8d541aeec28347dd47025.png"

character.onload = ()=>{
    context.globalAlpha = 1

    context.drawImage(character ,240,200, 100, 100)// este metodo si es para el juego 
}
