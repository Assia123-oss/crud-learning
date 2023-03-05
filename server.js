require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const dbConnection = require("./config/dbconn.config")
dbConnection();
const app = express();
const PORT = process.env.PORT || 8081;
app.use(express.json());
app.use('/api/v1',require("./routes/user.route"));
mongoose.connection.once("open",()=>{
  console.log("app is successfully connected to the db");
  app.listen(PORT,()=>{
    console.log(`Server runnning on port ${PORT}`);
  })
})