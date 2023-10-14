const express = require("express");
const {registerUser,loginUser,allUsers, getUserById,updateUser,deleteUser,banUser,unbanUser,maintainUser,adminUser} = require("../controllers/auth.controller");
  
 
const userRouter = express.Router(); 

userRouter.route('/REGISTER').post(registerUser);
userRouter.route('/LOGIN').post(loginUser);
userRouter.route('/').get(allUsers);
userRouter.route('/DELETE/:id').delete(deleteUser).get(getUserById).put(updateUser);
userRouter.route('/BAN/:id').put(banUser);
userRouter.route('/UNBAN/:id').put(unbanUser);
userRouter.route('/MAINTAIN/:id').put(maintainUser);
userRouter.route('/ADMIN/:id').put(adminUser);
 
 
module.exports = userRouter;