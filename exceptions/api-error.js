module.exports = class ApiError extends Error {
  status;
  errors;
  constructor(status, message) {
    super(message);
    this.status = status;
    
  }

  static UnauthorizedError() {
    return new ApiError(401, "User not authorized");
  }

  static AccessDenied() {
    return new ApiError(403, "Access denied");
  }

  static BadRequest(message) {
    return new ApiError(400, message);
  }
};
