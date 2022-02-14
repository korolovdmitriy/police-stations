module.exports = {
  async getAllCrimesByPoliceStationId(id) {
    return await fetch(
      `http://aqueous-eyrie-29899.herokuapp.com/policeStations/${id}`
    );
  },
};
