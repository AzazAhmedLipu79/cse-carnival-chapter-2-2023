const connectDB = require("../../config/database");
const User = require('../model/user.model.js')

const createUser = async (user) => {
  
    const { name, email, password, role } = user; 
    
}



module.exports = { createUser };