const comment = require("../model/comment.model.js");

const leaveAcomment = async (req, res) => {
    try {
        const { user_id, post_id, content } = req.body;
        if (!(user_id || post_id || content)) {
            return res.status(400).json({
            success: false,
            msg: "INVALID CREDENTIALS",
            });
        }
        const comment = await comment.create({ user_id, post_id, content });
        res.status(200).json({
        success: true,
        comment,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }

const getAllcommentByPostId =async (req, res) => { 
    try {
        const comments = await comment.find({post_id: req.param.post_id});
        res.status(200).json({
        success: true,
        comments,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }
const deleteComment = async (req, res)=>{

    try {
        const comment = await comment.findByIdAndDelete(req.params.comment_id);
        res.status(200).json({
        success: true,
        comment,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }

}

const updateComment =async (req, res)=>{
    try {
        const { user_id, post_id, content } = req.body;
        if (!(user_id || post_id || content)) {
            return res.status(400).json({
            success: false,
            msg: "INVALID CREDENTIALS",
            });
        }
        const comment = await comment.findByIdAndUpdate(req.params.comment_id, { user_id, post_id, content });
        res.status(200).json({
        success: true,
        comment,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }

}


module.exports = {leaveAcomment,getAllcommentByPostId, deleteComment, updateComment,};