
const mongoose = require("mongoose");
const User = require("../models/User.model");
const DB_NAM = "mongodb://localhost/perroShop"

mongoose
.connect(DB_NAM)

const perros = [
      
    {
        "username":"Thor",
        "password":"1234567"
    },
     {
        "username":"Valky",
        "password":"123456789"
    },
    
  ]


//vamos a crear 

User.create(perros, err=>{
    if(err){
        throw err;
    }
    console.log(`Creamos ${perros.length} en user model`)
    mongoose.connection.close()
})