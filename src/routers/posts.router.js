const express = require("express");
const { createPost, allPosts ,getPostById,updatePost,deletePost,getPostByUserId} = require("../controllers/post.controller.js");
 
  
 
const postRouter = express.Router(); 


postRouter.route('/').get(allPosts); 

postRouter.route('/me').put(updatePost).post(createPost); 
postRouter.route('/me/:id').get(getPostByUserId); 
postRouter.route('/DELETE/:id').delete(deletePost); 
postRouter.route('/:id').get(getPostById);

// postRouter.route('/').get(allPosts);
 
module.exports = postRouter;