const express = require("express");
const { registerExpert, updateUserRole} = require("../controllers/admin.controller.js");
 
  
 
const expertRouter = express.Router(); 


expertRouter.route('/').get((req,res)=>{
  res.json({success:true, message: 'Welcome Admin'})}); 

 
 expertRouter.route('/Update').put(updateUserRole);
 

 
module.exports = expertRouter;