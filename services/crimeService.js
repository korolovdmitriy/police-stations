const axios = require("axios");
const { checkCrimes } = require("./checkCrimes");

module.exports = {
  async getAllCrimesByPoliceStationId(id) {
    const url = `https://tranquil-taiga-07587.herokuapp.com/crimes?policeStationId=${id}`;
    return await axios.get(url);
  },

  async checkAllCrimesByPoliceStationId(id) {
    const response = await this.getAllCrimesByPoliceStationId(id);
    const resultOfCheckCrimes = checkCrimes(response.data);
    return resultOfCheckCrimes;
  },
};
