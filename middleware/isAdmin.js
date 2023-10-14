const User = require("../src/model/user.model.js");

const isAdmin = async (req, res, next) => {
    // The ID of the user to check the role of.
    const { id } = req.body;
  
    try {
      const user = await User.findById(id);
      if (user.role === USER_ROLES.ADMIN) {
        next();
      } else {
        res.status(401).json({
          success: false,
          msg: "You are not authorized to access this route",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        msg: "You are not reliable to access this route",
      });
    }
  };

  
  module.exports = isAdmin;