//importaremos express y routes

const router = require("express").Router();
const Dog = require("../models/Dog.model");
const User = require("../models/User.model");
//previamente como crea
/**
 * app.get("/ruta",cb)
 * app.post("rut",cb)
 */

// Get
//www.tinderperros.com/dogs
//www.tinderprros.com/dogs/list
//www.tinderprros.com/dogs/create-dog

//READ
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

//Esta es un ruta que pide el formulario de esa vista
//www.tinderperos.com/dogs/create-dog
router.get("/create-dog",(req,res,next)=>{
    res.render("form-dog")
})
                        //req = request solicitud todo lo que manda el navegador al server
                        //res = response todo lo que responde el server al cliente(Navegador)
                        //next = es un method que se utiliza para pasar a la siguiente accion
router.post("/create-dog",(req,res,next)=>{
    //aqui va un metodo de mongoose
    // get / ? req.query
    // post req.body => va toda la info que mandamos desde el frontend 
    //model.create({ }).then().catch()

    //1.- const {name,age,gender} = req.body
    // Dog.create({name,age,gender })

    //2.- Dog.create(req.body) // req.body ={name,age,gender} // este es inseguro

    //3.- const elDog = req.body
    // Dog.create(elDog)

    //4.- Dog.create({...req.body})

    //5.- const {role, ...rest } = req.body // rest = {age,name,gender} => { age,name,gender,pais,role}
    // Dog.create( rest )

//Modelo
    Dog.create(req.body)
    .then(dog => { //respuesta un parametro

        //como es un unico elemento respondera con un {}
        console.log("que es el dog",dog)
        res.render("success",dog)

        //res.render("success",{name:"Dylan"})
    })
    .catch(error=> {
        console.log("error",error)
        next()
    })

    /**
     *  crear un hbs que se llame detail-dog.hbs
     *  nombre perro, edad, genero y si esta disponible
     * 
     *  crear la ruta para ver el detalle "/detail/:id" get
     * 
     *  
     * crear dos rutas para un update (es igual que create-dog)
     * crear el hbs para acutlaizar (un form con todos los datos)
     *   update-dog.hbs 
     */
})

//ruta para ver el detalle

router.get("/detail/:id",(req,res,next)=>{
    //otra vez ocupamos un metodo de mongoose
    //modele.findById(1234567890)
    const { id } = req.params;
    // [{},{},{}] multiples elementos
    Dog.findById(id) //findById regresa un unico elemento {}
    //populate nos sirive para saber que contine el  id 
    //.populate("_owner") // traer todo lo del modelo de user

    //con dos parametros en el populate le decimos al valor _owner trae los elementos
    // y con el segundo valor solo le decimos que es lo que necesitamos
    //.populate("_owner", "username profile_pic")

    // con varias ref seria
    //.populate("_owner _parejas")
    .populate("_owner", "username") // populate funciona para hidratar el id y que nos muestre los valores que contiene osea 1234567 => {_id:21213,name:"perrro"}
    .then(dog => {
        //render("ruta",{name:dog.name,age:dog.age})
        console.log("respuesta del detial",dog)
        res.render("detail-dog", dog)

    })
    .catch(error=>{
        console.log("error",error)
        next()
    })
} )

//2 rutas para el update

router.get("/update-dog/:_id",(req,res,next)=>{
    /*const {_id} = req.params
    res.render("update-dog",{ _id })*/
    const {_id} = req.params
    Dog.findById(_id)
    .then(dog=>{
        res.render("update-dog",dog)
    })
    .catch(error=>{
        console.log("el Error:",error)
        next()
    })
})
router.post("/update-dog/:id",(req,res,next)=>{
    const { id } = req.params
    let  { isAvailable } = req.body
    // isAvailable = "false" ||
    if(isAvailable === "true" || isAvailable === "si" ){
        isAvailable = true
    }else if(!isAvailable || isAvailable === "false" || isAvailable === "no"){
        isAvailable = false
    }
    /*req.body={
       name:undefined
       age: undefined,
       gender:undefined

    }*/
    //metodo para acutalizar findByIdAndUpdate(id, {datos a actualizar}, {new:true} )
    Dog.findByIdAndUpdate(id, {...req.body,isAvailable },{new:true}) //me va a regrar un unico elemento {}
    .then(updatedDog=>{
        console.log("el nuevo perro",updatedDog)
                                //tenemos que convertir de bson a object JS la respuesta del metodo de mongoose
                                //para poder utilizar los motodos de los objetos
        res.render("success", { ...updatedDog.toObject(), isEdit:true} )
    })
    .catch(error=>{
        console.log("el error",error)
        next()
    })
})


//eliminar
router.get("/delete/:_id",(req,res,next)=>{

    //para eliminar 
    //metodo Modelo.findByIdAndDelete || findByIdAndRemove
    const { _id } = req.params
    Dog.findByIdAndDelete(_id)
    .then(()=>{
        res.render("success",{isDelete:true})
    })
    .catch(error=>{
        console.log("error",error)
        next()
    })
})

//Siempre hacer exportar
module.exports = router;