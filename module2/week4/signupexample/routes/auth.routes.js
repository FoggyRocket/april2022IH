//importamos y ejecutamos a express para traernos las rutas 
const router = require("express").Router();
//importar el modelo a utilizar
const User = require("../models/User.model");
//importamos bcryptjs 
const bcryptjs = require("bcryptjs");

router.get("/signup",(req,res,next)=>{
    //res.render genera la vista hbs
    //res.redirect redirecciona a otra ruta --> get
    //es la direccion de archivo hbs no tiene nada que ver con el nombre de la ruta
    res.render("auth/signup")
})

router.post("/signup",(req,res,next)=>{
    const {role,...restUser}= req.body
    const salt = bcryptjs.genSaltSync(12)
    const newPassword  = bcryptjs.hashSync(restUser.password, salt)

    //Model.create({}).then().catch
    User.create({...restUser, password:newPassword  })
    .then(user=>{
        console.log("la respuesta del create",user)
        /**
         * {
         *  _id:obejctId(123456789),
         *  username:"DylanSexy",
         *  password:"rad6s5rdas652e-.7yas7d9"
         *  __v:0
         * }
         */
        //v2 es la ruta de express Router.get("/profile")
        res.redirect(`/auth/profile/${user._id}`)
    })
    .catch(error=>{
        console.log("error",error)
        next()
    })

    
    
})
//ruta del profile
//http:/localhost:3000/auth/profile
router.get("/profile/:perro",(req,res,next)=>{
    const { perro } = req.params
    //perro = ObjectId
    //Model.findById(234567)
    User.findById(perro)
    .then(user=>{
        //v2   user = BSON == {} 
        res.render("user/profile",user)
    })
    .catch(error=>{
        console.log("error",error)
        next()
    })
})


//Login 
 router.get("/login",(req,res,next)=>{
     //solo mostrare mi form de login
     res.render("auth/login")
 })

 router.post("/login",(req,res,next)=>{
    const {username,password} = req.body
    User.findOne({ username })
    .then(user=>{
        //user null
        // {} === true
        console.log("el usuario en el profile",user)
        if(!user){
            return res.send("No es la contraseña o username bro u.u")
            
        }
        //user.password = r56fas56fas56dfa6d1
                                //testo vs hash
        if( bcryptjs.compareSync(password, user.password) ){
            res.redirect(`/auth/profile/${user._id}`)
        }else{
            res.send("No es la contraseña o username bro u.u")
        }
    })
    .catch(error=>{
        console.log("error",error)
        next()
    })
 })


module.exports = router