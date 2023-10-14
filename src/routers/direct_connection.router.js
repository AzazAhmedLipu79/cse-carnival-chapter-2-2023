const express = require("express"); 
const { leaveAcomment, deleteComment, updateComment,getAllcommentByPostId} = require("../controllers/comment.controller.js");
 
const DCRouter = express.Router(); 


DCRouter.route('/send_request').post(sendRequest);
 
 
 
 
module.exports = DCRouter;