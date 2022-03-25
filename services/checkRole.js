const jwt = require("jsonwebtoken");

module.exports = {
  checkRole(accessToken) {
    if (accessToken) {
      const user = jwt.verify(accessToken.split(" ")[1], "key-secret");
      if (user.role === "police") {
        return user;
      }
    }
    return new Error();
  },
};
