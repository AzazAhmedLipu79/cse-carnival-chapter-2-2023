const express = require("express"); 
const { leaveAcomment, deleteComment, updateComment,getAllcommentByPostId} = require("../controllers/comment.controller.js");
 
const commentRouter = express.Router(); 


commentRouter.route('/:post_id').post(leaveAcomment);
commentRouter.route('/c/:comment_id').delete(deleteComment).put(updateComment);
commentRouter.route('/post/:post_id').get(getAllcommentByPostId);

 
 
 
 
module.exports = commentRouter;