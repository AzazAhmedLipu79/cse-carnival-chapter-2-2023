const USER_ROLES = require("../../config/roles.js"); 
const User = require("../model/user.model.js");
const createToken = require("../../config/jwt.js"); 
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!(name||email||password) ) {
            return res.status(400).json({
            success: false,
            msg: "INVALID CREDENTIALS",
            });
        }
        const role = USER_ROLES.USER;
 
        const hashedPassword = await bcrypt.hash(password, 10); 

        const user = await User.create({ displayName:name, email, password:hashedPassword, role });
        const token =createToken(user._id);
        
        // res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({
        success: true,
        id: user._id,name,email,role, token
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }
    
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email || password)) {
            return res.status(400).json({
            success: false,
            msg: "INVALID CREDENTIALS",
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
            success: false,
            msg: "INVALID CREDENTIALS",
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
            success: false,
            msg: "INVALID CREDENTIALS",
            });
        }
        const token =createToken(user._id);
        // res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({
        success: true,
        id: user._id,
        name:user.displayName,
        email:user.email,
        role:user.role,
        token
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }

module.exports = {registerUser,loginUser};