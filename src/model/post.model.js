const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
 
  content: { type: String, required: true },
  category: { type: String, required: true },
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;

