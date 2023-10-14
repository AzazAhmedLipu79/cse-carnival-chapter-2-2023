const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  post_id: { type: String, required: true, unique: true },
  content: { type: String, required: true },
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;