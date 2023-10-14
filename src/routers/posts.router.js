const express = require("express");
const { createPost, allPosts ,getPostById,updatePost,deletePost,getPostByUserId} = require("../controllers/post.controller.js");
 
  
 
const postRouter = express.Router(); 


postRouter.route('/').get(allPosts); 
postRouter.route('/me/:id').get(getPostById).put(updatePost).post(createPost); 
postRouter.route('/DELETE/:id').delete(deletePost); 
postRouter.route(':id').get(getPostByUserId);

 
module.exports = postRouter;