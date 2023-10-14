const rateLimit = require("express-rate-limit");
 
const limiter = rateLimit({
  windowMs: 60 * 1000 * 10, // 1 minute
  max: 1000, // Limit each IP to 25 requests per 60sec
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    success: false,
    msg: "To many requests from your network, try after a minute",
  },
});

module.exports = limiter;