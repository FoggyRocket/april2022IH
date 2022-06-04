//vamos a import a mongoose
const mongoose = require("mongoose")
const Cat = require("./models/Cat.models")


//connection es una promesa || then() catch()
            //url hacia donde nos vamos a conectar
            //'mongodb://localhost/nameDataBase'
mongoose.connect('mongodb://localhost/perritosLocos')
.then( x=>console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`) )
.catch( err=>console.error('Error connecting to mongo', err) )
//end 
//Create modelos 
                        //modelo => me va a crear una coleccion
// const Cat = mongoose.model("Cat",{ 
//     name:String,
//     age:Number
// })

//crear un intance

const kitty = new Cat({name:"Bola de nieve VII",isAlive:true,color:"Negro",temper:"Salvaje"})


//insertMany
const cats = [
    {name:"OTRo de nieve VII",isAlive:true,color:"Negro",temper:"Salvaje"},
    {name:"OTRo de nieve VII",isAlive:true,color:"Negro",temper:"Salvaje"},
    {name:"OTRo de nieve VII",isAlive:true,color:"Negro",temper:"Salvaje"},
    {name:"OTRo de nieve VII",isAlive:true,color:"Negro",temper:"Salvaje"},
    {name:"OTRo de nieve VII",isAlive:true,color:"Negro",temper:"Salvaje"},
    {name:"OTRo de nieve VII",isAlive:true,color:"Negro",temper:"Salvaje"},
]

Cat.insertMany(cats)
.then(cats => console.log("el gato en la base",cats))
.catch(error=>console.log("error save kitty", error))


//guardar mi Kitty en la base de datos!!!
kitty.save()
.then(newKitty => console.log("el gato en la base",newKitty))
.catch(error=>console.log("error save kitty", error))

//Find
//FindByID
//FindOne
//findOneAndUpdate

//nameModel.find({name:""}).then().catch
Cat.find()
.then(cats => console.log("los gatos",cats))
.catch(error=>console.log("error find cat", error))


//find con filtro
Cat.find({ name: "Silvestre" })
.then(cats => console.log("los gatos con filtro",cats))
.catch(error=>console.log("error find cat", error))

//findOneAndUpdete({name:"GATOTE"}, {name:"Gatito"}, {new:true})
//Cat.findByIdAndUpdate
Cat.findOneAndUpdate({name:"GATOTE"},{name:"gatito"},{new:true})
.then(cat => console.log("el gato update",cat))
.catch(error=>console.log("error update cat", error))

//Cat.find({ name: "Silvestre" age:{$ls:2, $gt:5} })

//mongoose todos son promesas que estaremos utilizando THEN CATCH