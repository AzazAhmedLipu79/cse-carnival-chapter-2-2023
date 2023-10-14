const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
    post_id: { type: mongoose.Schema.ObjectId, ref: 'Post', required: true },
});

const comment = mongoose.model('Comment', commentSchema);
module.exports = comment;

