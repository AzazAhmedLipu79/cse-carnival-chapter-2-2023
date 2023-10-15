const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const limiter = require("./Config/limitReq.js"); 
const cookieParser = require("cookie-parser"); 
const {PORT} = require("./config/env_variable.js");
const error_handler = require("./middleware/error_handler.js");

const connectDB = require("./config/database.js");
connectDB();
const app = express(); 
 
app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));
app.use(limiter);
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  console.log("A request for things received at " + Date.now());
  next();
});
 

// Define a route handler for the root path that sends a welcome message
app.get("/", (req, res) => {
  res.json({ message: "Welcome TO Bisheshoggo" });
}); 
 
app.use('/auth',require('./src/routers/auth.router.js'));
app.use('/posts',require('./src/routers/posts.router.js'));
app.use('/expert',require('./src/routers/expert.router.js'));
app.use('/admin', require('./middleware/isAdmin.js'),require('./src/routers/admin.router.js'));
app.use('/comment',require('./src/routers/comment.router.js'));
app.use('/direct',require('./src/routers/direct_connection.router.js'));
// Error handling middleware
app.use(error_handler);

app.listen(PORT, () => {
  console.log('Server is running on PORT:',PORT);});
  