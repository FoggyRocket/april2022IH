const router = require("express").Router();
const User = require("../models/User.model");
const bcryptjs = require("bcryptjs");
/* GET home page */
//www.tinderperros.com/user/
//www.tinderperros.com/user
router.get("/", (req, res, next) => {
  res.send("Root del user");
});

//CRUD

//signup

router.get("/signup",(req,res,next)=>{
    res.render("auth/authForm",{isSignup:true})
});
router.post("/signup", async (req,res,next)=>{
    try{
        const {role,email,password, ...restUser} = req.body
        //vamos a validar
        if(!password || !password.length || !email || !email.length ){
            //v2
            const errorMessage = ["Debes agregar un correo y una contraseña"]
            return res.render('auth/authForm',{errorMessage,isSignup:true})
        }
        //validar la contraseña

        /*
            /^
            (?=.*\d)          // should contain at least one digit
            (?=.*[a-z])       // should contain at least one lower case
            (?=.*[A-Z])       // should contain at least one upper case
            [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
            $/
        */
        if( !password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/)){
            //v2
            const errorMessage=["La contraseña debe contener al menos una numero, etc..."]
            return res.render("auth/authForm",{isSignup:true,errorMessage})
        }
        if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            //v2
            const errorMessage = ["el correo no tiene formato valido"]
            return res.render("auth/authForm",{isSignup:true,errorMessage})
        }

        //vamos a buscar el email para saber si esta en nuestra app
                            //busca donde email = email
        const findUser = await User.findOne({ email })

        //valiamos la respuesta de mongoose //findUser 
        if(findUser){
            //v1
            const errorMessage = ["Este correo ya existe"]
            return res.render("auth/authForm",{isSignup:true,errorMessage})
            
        }


        //crear al usuario 
        //1) encriptamos password 2) crear con el salt el username //3) guardamos en la base;
        const salt = bcryptjs.genSaltSync(12)
        const passHashed = bcryptjs.hashSync(password,salt)
        //2
        const firstElement = email.split('@');
        const username = `${firstElement[0]}-${salt}`;
        //3
        const user = await User.create({...restUser, username, password:passHashed, email})
        res.redirect(`/user/profile/${user._id}`)

    }catch(error){
        //v2
        const errorMessage = []

        //como iterar en objeto for in
        if(error.errors){

            for(let key in error.errors){
                console.log("error",error.errors[key])

                console.log("error2",Object.keys(error.errors[key]))
                const message = `${key}: ${error.errors[key].properties.message}`
                errorMessage.push(message)
                //"firstNAme: validate error" 
            } 
        }else{
            const message = "Intenta mas tarde"
            errorMessage.push(message)
        }
        return res.render("auth/authForm",{isSignup:true,errorMessage})
    }

})

//Login
router.get("/login",(req,res,next)=>{
    res.render("auth/authForm")
});

module.exports = router;
