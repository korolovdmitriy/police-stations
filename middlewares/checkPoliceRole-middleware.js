const ApiError = require("../exceptions/api-error");

module.exports = function (req, res, next) {
  try {
    if (req.user !== "POLICE") {
      return next(ApiError.AccessDenied());
    }
    next();
  } catch (error) {
    return next(ApiError.AccessDenied());
  }
};
