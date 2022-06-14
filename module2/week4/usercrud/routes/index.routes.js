const router = require("express").Router();
const User = require("../models/User.model")

/**
 *  C=CREATE
 *  R=READ - All, one, byId
 *  U=UPDATE
 *  D=DELETE
 */

//www.dylan.com/compras

/* READ user */
router.get("/", (req, res, next) => {
  //Con que metodo podemos traer todos los documentos de un model
  //MODEL.find()

  User.find()
  .then(users =>{
    console.log("que es",users)
    //la respuesta si contiene uno o mas regresara en un array
    //render("nombreVista", {perros:[], user:{} })
    res.render("index", { users })
  })
  .catch(error=>{
    console.log("El error en el '/' ",error)
    next()
  })
});


// CREATE
router.get("/create",(req,res,next)=>{
  res.render("form-user")
})
router.post("/create",(req,res,next)=>{
  //req.body = { username:"Foggyrocker", password:"DylanSexy",address:"CDMX",role:"ADMIN" }
  const {role, ...restUser } = req.body

  console.log("EL BODY",req.body)
  console.log("el resteUSER",restUser)
  // role = "ADMIN"
  // restUser={username,password,address}
  //MODEL.create({ ... })
  User.create(restUser)
  .then(user=>{ //responder con un {...}
    res.render("success",user)
  })
  .catch(error=>{
    console.log("El error en el '/create' ",error)
    next()
  })
})

//UPDATE
//editar la lista con un boton ("<a>") para que nos mande al formulario ¬¬

// ruta que se llame ("/update/:id") get post esta lleva params en ambas rutas
                    //t67t3762t534672f
router.get("/update/:id",(req,res,next)=>{
    //sacar de los params mi variable id
    const { id } = req.params;

    User.findById(id)
    .then(user => {
      res.render("update-form",user)
    })
    .catch(error=>{
      console.log("El error en el '/udapte' ",error)
      next()
    })
})

router.post("/update/:id",(req,res,next)=>{
  const { id } = req.params
  const {role, ...restUser} = req.body
  //MODEL.findByIdAndUpdate(id,{key:"Value",...}, {new:true})
  User.findByIdAndUpdate(id,restUser,{new:true})
  .then(updatedUser=>{
    console.log("el user actualizado",updatedUser)
    //la respuesta de metodos de mongoose no son objetos son BSON
                          //{isEdit:true, username:updatedUser.username, password:updatedUser.password, _id:updatedUser._id}

                          //...(spread) solo funciona con STRING, ARRAY y OBJECT
    res.render("success",{ isEdit:true, ...updatedUser.toObject() })
  })
  .catch(error=>{
    console.log("El error en el '/udapte' ",error)
    next()
  })
})

//DELETE
router.get("/delete/:id",(req,res,next)=>{
  const { id }= req.params
  
  //Model.findByIdRemove o Delete
  User.findByIdAndDelete(id)
  .then(()=>{
    res.render("success",{isDelete:true})
  })
  .catch(error=>{
    console.log("El error en el '/delete' ",error)
    next()
  })
})


//ejemplo params
router.get("/:perro",(req,res,next)=>{
  res.send("entro en ruta con params perro")
})




module.exports = router;
