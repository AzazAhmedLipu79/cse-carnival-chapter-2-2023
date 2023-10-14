 
const User = require("../model/user.model.js");

const updateUserRole = async (req, res) => {
 const {id, role } = req.body;
    try {
    const user = await User.findByIdAndUpdate(id, {role});
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



    module.exports = { updateUserRole };