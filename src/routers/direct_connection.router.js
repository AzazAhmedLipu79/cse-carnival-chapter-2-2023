const express = require("express"); 
const { sendRequest,getAllMessageByReceiverId , getInbox,getAllMessageBySenderId} = require("../controllers/direct_connection.controller.js");
 
const DCRouter = express.Router(); 


DCRouter.route('/send_request').post(sendRequest);
DCRouter.route('/Reciver/:receiver_id').get(getAllMessageByReceiverId);

DCRouter.route('/Sender/:sender_id').get(getAllMessageBySenderId);
DCRouter.route('/inbox/:sender_id/:reciver_id').get(getInbox);

 
 
 
 
module.exports = DCRouter;