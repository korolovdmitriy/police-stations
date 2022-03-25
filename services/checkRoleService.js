const jwt = require("jsonwebtoken");

module.exports = {
  checkRole(accessToken) {
    if (!accessToken) {
      throw new Error("User not authorized");
    }
    const user = jwt.verify(accessToken.split(" ")[1], "key-secret");
    if (user.role !== "police") {
      throw new Error("Access denied");
    }
    return user;
  },
};
