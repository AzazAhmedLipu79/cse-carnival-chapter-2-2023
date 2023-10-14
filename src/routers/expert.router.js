const express = require("express");
const { registerExpert} = require("../controllers/expert.controller.js");
 
  
 
const expertRouter = express.Router(); 


expertRouter.route('/register').post(registerExpert); 
 
 
 
module.exports = expertRouter;