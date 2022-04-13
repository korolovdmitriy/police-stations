const ApiError = require("../exceptions/api-error");
const securityService = require("../services/securityService");

module.exports = async function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    const accessToken = authorizationHeader.split(" ")[1];
    const result = await securityService.checkToken(accessToken);
    if (result.data.message === "false") {
      return next(ApiError.UnauthorizedError());
    }
    next();
  } catch (error) {
    return next(ApiError.UnauthorizedError());
  }
};
