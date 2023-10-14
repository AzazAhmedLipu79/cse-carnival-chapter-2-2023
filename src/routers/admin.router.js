const express = require("express");
const { registerExpert, updateUserRole} = require("../controllers/admin.controller.js");
 
  
 
const adminUser = express.Router(); 


adminUser.route('/').get((req,res)=>{
  res.json({success:true, message: 'Welcome Admin'})}); 

 
  adminUser.route('/Update').put(updateUserRole);
 

 
module.exports = adminUser;