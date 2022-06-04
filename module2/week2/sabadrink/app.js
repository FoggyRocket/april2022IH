//nos traemos hbs y que mas...
//importamos las librerias o funciones autilizar
require('dotenv').config();
const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser")


//init express

const app = express()


//setup 

//public 
app.use(express.static("public"))
//hbs
app.set("views",__dirname+'/views' )
//hbs templates
app.set("view engine","hbs")
//hbs partials
hbs.registerPartials(__dirname+"/views/partials")
//body-parse 
app.use(bodyParser.urlencoded({ extended:true }))

//rutas!!!
    //.verb("/direccion" , (req,res,next)=>{} )
app.get("/",(req,res,next)=>{
    //respuesta v1
    console.log("mi clave",process.env.CLIENT_ID)
    res.send("Estoy en el hoy") //.send => mandar texto!!!
})



//Query Params
app.get("/search",(req,res,next)=>{
    /**
     * req.query = { }
     */
    console.log("en el req",req.query)
    //response v2
    res.render('search')
})

// ?key=value&key2=valor  <- query params

//Params
// verb("/:var",cbfn)

/**
 * hay que colocarlos casi al final del archivo o declararlos con una ruta mas
 */
 app.get("/super/:gato/:sandia",(req,res,next)=>{
    console.log("los params",req.params)
    res.send(`estas en la ruta ${req.params.gato}`)
})
    //:var
    //req.params = {}

//Rutas para el post!!


app.get("/login",(req,res,next)=>{

    res.render("home")
})

app.post("/login",  validatePassword     ,(req,res,next)=>{
    const {username} = req.body
    console.log("El body",req.body) //req.body!!!


    let tag = "<h3>Hola mundo </h3>"
    /**
     *  req.body = {
     *  key:"value",
     * key2:"value",
     * ...,
     * keyn:"value"
     * }
     */
    res.render("success",{ username,tag })
})


app.get("/artist/:id",(req,res,next)=>{
    console.log("los params",req.params)

    res.send(`estas en la id ${req.params.id}`)

})

app.get("/user/:userid/:role",(req,res,next)=>{
    console.log("los params",req.params)

    res.send(`estas en la id ${req.params.id}`)

})
app.get("/perro/:perroId/breed/:breed",(req,res,next)=>{
    console.log("los params",req.params)

    res.send(`estas en la id ${req.params.breed}`)

})

app.get("*",(req,res,next)=>{
    console.log("los params 404")

    res.send(`No existe!!! u.u`)

})

function validatePassword(req,res,next){

    const { password } = req.body

    if(password === "Perro182$"){
        next()
    }else{
        res.send("No es correcta la contraseña")
    }
}












// * <- para el 404



//prender el server

app.listen(3000,()=>{
    console.log("Estoy corriendo en chinga!")
})


