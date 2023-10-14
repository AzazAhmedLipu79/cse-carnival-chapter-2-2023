const DC = require("../model/direct_connection.model.js");
const User = require("../model/user.model.js");

const sendRequest = async (req, res) => {
    try {
        const { sender_id, receiver_id, content } = req.body;
        if (!(sender_id || receiver_id || content)) {
            return res.status(400).json({
            success: false,
            msg: "INVALID CREDENTIALS",
            });
        }
        const request = await DC.create({ sender_id, receiver_id, content });
        res.status(200).json({
        success: true,
        request,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }

    // now make a function to get all meassages by the sender_id 
    const getAllMessageByReceiverId = async (req, res) => {
        
        try {
            const messages = await DC.find({receiver_id: req.params.receiver_id});
             const user = await User.findById(messages.sender_id);

            res.status(200).json({
            success: true,
            messages,
        user   
        });
        } catch (err) {
            console.log(err);
            res.status(500).json({
            success: false,
            msg: "Something went wrong",
            });
        }
        }
        const getAllMessageBySenderId = async (req, res) => { 
            try {
                const messages = await DC.find({sender_id: req.params.sender_id});
                 const user = await User.findById(messages.receiver_id);
    
                res.status(200).json({
                success: true,
                messages,
            user   
            });
            } catch (err) {
                console.log(err);
                res.status(500).json({
                success: false,
                msg: "Something went wrong",
                });
            }
            }

    //  filter all data where sender_id and receiver_id same
    const getInbox = async (req, res) => {
 
const {sender_id, receiver_id} = req.params;
        try {
            const messages = await DC.find({sender_id,receiver_id});
            res.status(200).json({
            success: true,
            messages,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
            success: false,
            msg: "Something went wrong",
            });
        }
        }

    module.exports = { sendRequest,getAllMessageByReceiverId , getInbox,getAllMessageBySenderId};