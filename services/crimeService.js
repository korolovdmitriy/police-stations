const axios = require("axios");
const { checkCrimes } = require("./checkCrimes");
const crimeServer = require("../configs/crime-server-config.json");

module.exports = {
  async getAllCrimesByPoliceStationId(id) {
    const url = `${crimeServer.url}/crimes?policeStationId=${id}`;
    return await axios.get(url);
  },

  async checkAllCrimesByPoliceStationId(id) {
    const response = await this.getAllCrimesByPoliceStationId(id);
    const resultOfCheckCrimes = checkCrimes(response.data);
    return resultOfCheckCrimes;
  },
};
