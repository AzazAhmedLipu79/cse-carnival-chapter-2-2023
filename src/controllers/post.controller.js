const Post = require('../model/post.model.js');

const createPost = async (req, res) => {
    const { user_id, post_id, content } = req.body;
    if (!(user_id || post_id || content)) {
        return res.status(400).json({
        success: false,
        msg: "INVALID CREDENTIALS",
        });
    }
    try {
        const post = await Post.create(user_id, post_id, content);
        res.status(200).json({
        success: true,
        post,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }

const allPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({
        success: true,
        posts,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }

const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({
        success: true,
        post,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }

const updatePost = async (req, res) => {
    try {
        const { user_id, post_id, content } = req.body;
        if (!(user_id || post_id || content)) {
            return res.status(400).json({
            success: false,
            msg: "INVALID CREDENTIALS",
            });
        }
        const post = await Post.findByIdAndUpdate(req.params.id, { user_id, post_id, content });
        res.status(200).json({
        success: true,
        post,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }

const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
        success: true,
        post,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }

const getPostByUserId = async (req, res) => {
    try {
        const post = await Post.find({ user_id: req.params.id });
        res.status(200).json({
        success: true,
        post,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }

module.exports = { createPost, allPosts ,getPostById,updatePost,deletePost,getPostByUserId };