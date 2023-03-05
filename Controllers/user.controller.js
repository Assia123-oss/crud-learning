const mongoose = require('mongoose');
const express = require('express');
const User = require("../models/users.model");

const createUser = async(req,res,next)=>{
  try{
    const {firstName,lastName,gender,email} = req.body;
    const user = req.body;
    const newUser = await User.create(user);
    console.log(`New user with name ${newUser.firstName} ${newUser.lastName} has been created`);

  }
  catch(err){
    console.log("the error is",err.message);
  }
}
module.exports= {createUser}