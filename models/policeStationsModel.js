const client = require("./db-connect");

module.exports = {
  async getPoliceStations() {
    const query = "SELECT * FROM police.station";
    const result = await client.execute(query);
    return result.rows;
  },

  async postPoliceStation(id, location) {
    const query = `INSERT INTO police.station (id, location) VALUES (${id}, '${location}')`;
    return await client.execute(query);
  },

  async getPoliceStationById(id) {
    const query = `SELECT * FROM police.station WHERE id = ${id}`;
    const result = await client.execute(query);
    return result.rows;
  },

  async patchPoliceStationById(id, location) {
    const query = `UPDATE police.station SET location = '${location}' WHERE id = ${id}`;
    return await client.execute(query);
  },

  async deletePoliceStationById(id) {
    const query = `DELETE FROM police.station WHERE id = ${id}`;
    return await client.execute(query);
  },
};
