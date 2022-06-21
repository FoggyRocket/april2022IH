const isLoggedIn = (req,res,next)=>{

    //checar si el usuario esta loggeado
    if(!req.session.currentUser){
       return res.redirect("/user/login")
    }

    next()

}

module.exports = isLoggedIn