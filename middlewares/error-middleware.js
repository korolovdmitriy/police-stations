const ApiError = require("../exceptions/api-error");

module.exports = function (err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ mesage: err.message });
  }
  return res.status(500).json({ message: "Unexpected error" });
};
