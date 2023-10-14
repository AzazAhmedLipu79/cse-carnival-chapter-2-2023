const mongoose = require("mongoose"); 

const Userschema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
    min: 3,
    max: 50,
  }, 
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  role:{
    type: Number,
    required: true,
    default: 0,
  },
  gender:{
    type: Number,
    required: true,
    default: 1,
  }, 
  certification:{
    type: String,
    required: false,
    default: "",
  },
  specialization:{
    type: String,
    required: false,
    default: "",
  },
});

const User = new mongoose.model("User", Userschema);

 

module.exports = User;