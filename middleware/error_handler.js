// a reliable error handler middleware that will catch all errors and send back a response to the client.

const errorHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({
      success: false,
      msg: "Something went wrong",
    });
    }

    module.exports = errorHandler;