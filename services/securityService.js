const axios = require("axios").default;
const securityServer = require("../configs/security-server-config.json");

module.exports = {
  async checkToken(accessToken) {
    const url = `${securityServer.url}/auth/check`;
    return await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};
