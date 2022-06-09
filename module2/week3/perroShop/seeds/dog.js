
const mongoose = require("mongoose");
const Dog = require("../models/Dog.model");
const DB_NAME = "mongodb://localhost/perroShop"

mongoose
.connect(DB_NAME)

const perros = [
      
    {
        "name":"Thor",
        "gender": "Macho",
        "age":2,
    },
     {
        "name":"Valky",
        "gender":"Hembra",
        "age":1
    },
     {
      "name":"Nova",
      "gender":"Hembra",
      "age":2
    },
     {
      "name":"Howl",
      "gender":"Macho",
      "age":1
    },
     {
      "name":"Sibelle",
      "gender":"Hembra",
      "age":2
    },
     {
      "name":"Cookie",
      "gender":"Hembra",
      "age":6
    },
     {
      "name":"pericles",
      "gender":"Macho",
      "age":7
    },
     {
      "name":"Spike",
      "gender":"Macho",
      "age":9
    },
     {
      "name":"Kalipso",
      "gender":"Hembra",
      "age":6
    },
     {
      "name":"Sparky",
      "gender":"Hembra",
      "age":8
    },
     {
      "name":"Nano",
      "gender": "Macho",
      "age":3
    },
  ]


//vamos a crear 

Dog.create(perros, err=>{
    if(err){
        throw err;
    }
    console.log(`Creamos ${perros.length} en dog model`)
    mongoose.connection.close()
})