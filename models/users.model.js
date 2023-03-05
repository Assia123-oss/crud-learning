const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName:{
    type:String,
    required:[true,"First name is required please"]
  },
  lastName:{
    type:String,
    required:[true,"last name is required please"]
  },
  gender:{
    type:String,
    enum:["male","female"]
  },
  email:{
    type:String,
    required:true
  },
  likesCount:{
    type:[Number]
  }
})
module.exports = mongoose.model("User",userSchema);