//importaremos los elementos para express
//1.-
const express = require("express")

//vamos a crear nuestro server todo gracias al poderoso express
//3.- ejecutar y colocar sus setup
const app = express() //<-- ejecutamos express para obtener sus propiedades y sus metodos!!


//esto es para mas tarde
//haremos una config para usar archivos images, audio, css

    app.use( express.static('public') )

//end apartado1 
//Crearemos rutas!!!
//post && get
//get -> siempre para optener info!!
// req = request
// res = response
// app.verb("/ruta", (req,res,next)=>{})
app.get("/",(req,res,next)=>{
    res.send("Esta es tu ruta '/' en express") //send() es solo para mandar texto!!
})

app.get("/contact",(req,res,next)=>{
    res.send(`
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Contact</title>
            <link rel="stylesheet" href="stylesheet/style.css" />
        </head>
        <body>
            <h1>Sexiest Man Alive</h1>
            <p>Autor:Dylan Torres cruz</p>
            <img src="images/sexy4.jpeg"  width="200" height="200" />
            <script src="js/otro.js"
            ></script>
        </body>
    </html>
    `)
})

//creenme otras 10 pages conformato html 

//entraremos con un formulario!!
app.post("/dylan",(req,res,next)=>{
    res.send("Este es un demo con post")
})

//esta es la fomra a utilizar para el ejercicio
app.get("/new-sexy",(req,res,next)=>{

    //_ _ dirname
    //sendFile()
    res.sendFile(__dirname + '/views/newSexy.html')
})


//end CrearRutas!!

//aqui vamos a prender el server!!!
app.listen(3000,()=>{
    console.log("Estoy corriendo en el puerto 3000")
})
