//obtener!! el node input!! de mi html
//getElementById ==> busca el node con el id escrito
//getElementsByClassName ==> busca todos los nodes con la misma clase

const input = document.getElementById("count") //=> <input type="text" id="count">

const demito = document.getElementsByClassName("demo") // => [...]

console.log("Existe?", document.getElementById("perro")) //si no existe la etiqueta regresa un null
//console.log("inpout",input)

//form
demito[1].style.background = "red";
demito[1].style.height ="400px";
demito[1].style.width = "400px"

console.log("TAGS?",document.getElementsByTagName("button"))


//querySelector

console.log("QuerySelector?", document.querySelector("button"))

//querySelectorAll

console.log("QuerySelectorAll:",document.querySelectorAll("#fake, .demo, #count") )

// tagName => [0]  nombreVar[0].otroElemento
// querySelector => <span> // nombreVar.otrolemento

const spanDemo = document.querySelector("span")

/**
 *  <span> = {
 * //propiedades
 *  className :''
 * //metodos
 * }
 */
//.className 
//si existe hacemos update  : la creamos y le damos el valor
//{}

const dylan = {
    name:"Dylan",
    status:"single"
}
spanDemo.className = "recuerdame!!"

dylan.pet = "nova"
dylan.status = "Muerto"

console.log("Que estoy haciendo?", spanDemo.className)


let demoDiv = document.querySelector("div")
demoDiv.setAttribute('id', 'info')

console.log(demoDiv)


//vamos a ver el valor del input
const btn = document.querySelector("button")
//onclick = ()=>{} || function (){}
btn.onclick = ()=>{
    console.log("value input",typeof input.value)
}

btn.onmouseenter =()=>{
    console.log("El mouse esta arriba de mi? ")
}

// vamos por el contenedor
const container = document.getElementById("cart")

//me voy a crear una funcion para agregar al carrito
function addItem(){
    const price = input.value

    //aqui vamos a crear una nueva etiqueta con la siguietne sintaxis!!!!!
    //document.createElement("tag");
    //innerText add text
    //innerHMTL add any (cual quier cosa!!! HTML)
    //appendChild   me agrega HTML como ultimo hijo de un contenedor 
    const div = document.createElement("div")
    const button = document.createElement("button");
    //const button2 = document.createElement("button")
    button.innerText = "Matame pls!!!"
    // un metodo te manda por defecto un event (e)=>{ }
    button.onclick = killElement;
    //modificar el html!!! innerHTML

    div.innerHTML = `
    <div class="item">
        <div>Product name</div>
        <div class="price">${price}</div>
    </div>
    `
   
    //agregar el boton
    div.appendChild(button)
    //agregar el div a nuestro contenedor CART
    container.appendChild(div)


    //button.innerHTML 
    /*<button>
        <div></div>
    </button>
    */
}
function killElement(event){
    //div.target.parentNode.remove()
    console.log("que es?",event.target.parentNode)
    event.target.parentNode.remove()
}


btn.onclick = addItem



//eventListener
//window.addEventListener("keydown",()=>{})

