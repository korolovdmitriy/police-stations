const ApiError = require("../exceptions/api-error");
const jwt = require("jsonwebtoken");
const tokenKeys = require("../configs/token-keys.json")

module.exports = function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError());
    }
    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) {
      return next(ApiError.UnauthorizedError());
    }
    const userData = jwt.verify(accessToken, tokenKeys.accessKey);
    if (!userData) {
      return next(ApiError.UnauthorizedError());
    }
    req.user = userData.role;
    next();
  } catch (error) {
    return next(ApiError.UnauthorizedError());
  }
};
