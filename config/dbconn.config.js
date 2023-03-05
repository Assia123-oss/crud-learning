const mongoose = require("mongoose");
const dbconnection = async()=>{
  try{
    await mongoose.connect(process.env.DATABASE_URL,{
      useNewUrlParser:true,
      useUnifiedTopology:true
    })
  }
  catch(err){
    console.error("THE ERROR IS",err.message)
  }
}
module.exports = dbconnection;