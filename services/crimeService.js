const axios = require("axios");

module.exports = {
  async getAllCrimesByPoliceStationId(id) {
    const url = `https://tranquil-taiga-07587.herokuapp.com/crimes?policeStationId=${id}`;
    return await axios.get(url);
  },
};
