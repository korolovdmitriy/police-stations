const axios = require("axios");
const securityServer = require("../configs/security-server-config.json");

module.exports = {
  async checkToken(token) {
    const url = `${securityServer.url}/checktoken?token=${token}`;
    return await axios.get(url);
  },
};
