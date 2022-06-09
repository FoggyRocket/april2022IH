//importaremos express y routes

const router = require("express").Router();
const Dog = require("../models/Dog.model")
//previamente como crea
/**
 * app.get("/ruta",cb)
 * app.post("rut",cb)
 */

// Get
//www.tinderperros.com/dogs
//www.tinderprros.com/dogs/list
//www.tinderprros.com/dogs/create-dog
router.get("/list",(req,res,next)=>{
    //como solicitabanos documentos a mongoose find?    
    //para aplicar el metodo de mongoose necesito el modelo osea tenemos que importar el modelo
    //Modelo.method() => Promise => 
    Dog.find()
    .then((dogs) => {
        //find siempre va a regresar un []
                            //dogs:[...dogs]
        res.render("list-dog",{ dogs }) //
    } )
    .catch(error=>{
        console.log("Error",error)
        next()//ve a la vista de error y muestro al usuario
    })
})

//2 rutas  crear al perro
//get
//post

router.get("/create-dog",(req,res,next)=>{
    res.render("form-dog")
})

router.post("/create-dog",(req,res,next)=>{
    //aqui va un metodo de mongoose
    // get / ? req.query
    // post req.body => va toda la info que mandamos desde el frontend 

    res.render("success",{name:"Dylan"}) //Esto lo voy a modificar o borrar aun no lo se 
    //model.create({ })
})


//Siempre hacer exportar
module.exports = router;