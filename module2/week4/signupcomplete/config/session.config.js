//requerimos de express-session
const session = require("express-session")

const MongoStore = require("connect-mongo");
const mongoose = require("mongoose")

module.exports = app =>{
    // esto solo es cuando se sube a heroku!! osea production

    app.set('trust proxy',1);


    //utilizar la session
    app.use(
        session({
            secret: process.env.SECRET,
            resave: true,
            saveUninitialized:false,
            cookie:{
                sameSite:process.env.NODE_ENV === "production" ? 'none' : 'lax',
                secure:process.env.NODE_ENV === "production",
                httpOnly:true,
                maxAge: 60000
            },
            store:MongoStore.create({
                mongoUrl: process.env.MONGODB_URI || "mongodb://localhost/signupcomplete"
                // ttl => time to live
                // ttl: 60 * 60 * 24 // 60sec * 60min * 24h => 1 day
                
            })
        })
    )
}