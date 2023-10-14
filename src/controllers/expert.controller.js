const createToken = require("../../config/jwt");
const { USER_ROLES, GENDER } = require("../../config/roles");
const User = require("../model/user.model.js");
const bcrypt = require('bcrypt');

const registerExpert = async (req, res) => {
    try {
        const {name, certification, specialization, email,password,gender } = req.body;
        const gen = GENDER[gender]
        if (!(name || certification || specialization || email || password || gen)) {
            return res.status(400).json({
            success: false,
            msg: "INVALID CREDENTIALS",
            });
        }
        const role= USER_ROLES.UNVERFIED_EXPERT;
        const hashedPassword = await bcrypt.hash(password, 10); 

        const expert = await User.create({ displayName: name, certification, specialization, email, password:hashedPassword,role, gender:gen});
        const token = createToken(expert._id);
       
        res.status(200).json({
        success: true,
        expert,token
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }


module.exports = {registerExpert};