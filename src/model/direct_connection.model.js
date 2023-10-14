const mongoose = require('mongoose');

const DCSchema = new mongoose.Schema({
     sender_id: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    reciever_id: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
     content: { type: String, required: true },
});

const DC = mongoose.model('Direct_Connection', DCSchema);
module.exports = DC;

