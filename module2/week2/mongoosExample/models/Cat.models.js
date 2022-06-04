// destructuring 
// const {name,title } = objeto

const { Schema,model } = require("mongoose")

//creamos el Schema({estructura},{options})

const catSchema = new Schema({
    name:String,
    age:{
        type:Number,
        default:2
    },
    color:String,
    isAlive:Boolean,
    temper:{
        type:String,
        enum:["Salvaje","Amable","Lloron"],
        default:"Amable"
    }

})


//nunca olvidar exportar el documento
//const Cat = model("Cat",catSchema)
//module.exports = Cat;

module.exports = model("Cat",catSchema)
