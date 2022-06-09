// importar moongose

//v1 = const mongoose = require("mongoose")
// mongoose.Schema 
//desctructuring 

const {Schema,model, SchemaType} = require("mongoose")


//Escribir el Schemq
                // ({estructura},{optional?: timestamp:true})
const dogSchema = new Schema({
    //aqui va nuestra estructura!!!
    name:{
        type:String,
        required:true  
    },
    gender:{
        type:String,
        enum:["Macho","Hembra"]
    },
    age:Number,
   /* 
   con rango de edad
   otroAge:{
        type:Number,
        min:1,
        max:4
    }
    */
    isAvailable:{
        type:Boolean,
        default:true,
    },

    _owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
    /**
     *  _owner:[ {type:Schema.Types.ObjectId,ref:"User"} ]
     */
    
},{timestamps:true});



//ultimo paso exports

module.exports = model("DOG",dogSchema)
