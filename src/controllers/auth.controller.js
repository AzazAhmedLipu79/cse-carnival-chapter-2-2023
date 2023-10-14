const {USER_ROLES,GENDER } = require("../../config/roles.js"); 
const User = require("../model/user.model.js");
const createToken = require("../../config/jwt.js"); 
const bcrypt = require('bcrypt');
const { hash, compare } = require("../../utilities/hashing.js");

const registerUser = async (req, res) => {
    console.log(req.body)
    const { name, certification, specialization, email, password, gender, role } = req.body;

// Check if the role is valid.
// if (![USER_ROLES.UNVERFIED_USER, USER_ROLES.UNVERFIED_EXPERT].includes(role)) {
//   return res.status(400).json({
//     success: false,
//     msg: "INVALID CREDENTIALS - This role does not support for registration",
//   });
// }

// Check if the required fields are present.
if (role === USER_ROLES.UNVERFIED_EXPERT && !( certification && specialization  )) {
  return res.status(400).json({
    success: false,
    msg: "An Expert must provide all the details for verification",
  });
}

if (!(name && email && password && gender)) {
  return res.status(400).json({
    success: false,
    msg: "INVALID CREDENTIALS",
  });
}

const gen = GENDER[gender];
// Hash the password.
const hashedPassword = await hash(password);

// Create a new user.
const user = await User.create({
  displayName: name,
  email,
  password: hashedPassword,
  role,
  gender:gen,
  certification,
  specialization,
});

// Create a JWT token.
const token = createToken(user._id);

// Respond with the user data and the JWT token.
res.status(201).json({
  success: true,
  id: user._id,
  name,
  email,
  role,
  token,
  certification,
  specialization,
});

}
    
const loginUser = async (req, res) => {
    console.log(req.body)
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
            msg: "INVALID USER CREDENTIALS",
            });
        }
        const isMatch = compare(password, user.password);
        console.log(isMatch)
        if (!isMatch) {
            return res.status(400).json({
            success: false,
            msg: "INVALID PASSWORD CREDENTIALS",
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

    const allUsers = async (req, res) => {
        try {
            const users = await User.find({});
            res.status(200).json({
            success: true,
            users:users
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
            success: false,
            msg: "Something went wrong",
            });
        }
        }
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
        success: true,
        user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }
const updateUser = async (req, res) => {
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
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
        success: true,
        user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }
const banUser = async (req, res) => {   
    try {
        const user = await User.findByIdAndUpdate(req.params.id,{role:USER_ROLES.BANNED});
        res.status(200).json({
        success: true,
        user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }
const unbanUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id,{role:USER_ROLES.USER});
        res.status(200).json({
        success: true,
        user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }
const maintainUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id,{role:USER_ROLES.MAINTAINER});
        res.status(200).json({
        success: true,
        user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }
const adminUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id,{role:USER_ROLES.ADMIN});
        res.status(200).json({
        success: true,
        user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
        success: false,
        msg: "Something went wrong",
        });
    }
    }


    const verifyUser = async (req, res) => {
        const { id } = req.body;
        try {
          const user = await User.findById(id);
         
          res.status(200).json({
            success: true,
            user
          });
        } catch (err) {
          console.log(err);
          res.status(500).json({
            success: false,
            msg: "Something went wrong",
          });
        }}

module.exports = {registerUser,loginUser,allUsers, getUserById,updateUser,deleteUser,banUser,unbanUser,maintainUser,adminUser,verifyUser};