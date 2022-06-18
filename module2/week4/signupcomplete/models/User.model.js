const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true, //-> Ideally, should be unique, but its up to you
      require:true ,
    },
    firstName:{
      type:String,
      require:true,
      minLength:[1, "Almenos debes tener una letra"]
    },
    lastName:{
      type:String,
      require:true,
      minLength:[1, "Almenos debes tener una letra"]
    },
    email:{
      type:String,
      require:[true,"Debes de mandar de a producto de gallina el correo"],//custom message error
      unique:true
    },
    profile_pic:{
      type:String,
      default:"https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png"
    },
    password:{
      type:String,
      require:true
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
