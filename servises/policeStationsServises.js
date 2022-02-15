const axios = require("axios");

module.exports = {
  async getAllCrimesByPoliceStationId(id) {
    const url = `http://aqueous-eyrie-29899.herokuapp.com/policeStations/${id}`;
    return await axios.get(url);
  },
};
