const axios = require("axios").default;
const securityServer = require("../configs/security-server-config.json");

module.exports = {
  async checkToken(token) {
    const url = `${securityServer.url}/check?accessToken=${token}`;
    return await axios.get(url);    
  },
};
