// const isLoggedOut = (req,res,next)=>{

//     //checar si el usuario esta loggeado
//     if(req.session.currentUser){
//        return res.redirect("/user/profile")
//     }

//     next()

// }



// module.exports = isLoggedOut




module.exports = (req,res,next)=>{

    //checar si el usuario esta loggeado
    if(req.session.currentUser){
       return res.redirect("/user/profile")
    }

    next()

}
