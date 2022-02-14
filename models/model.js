const { Client } = require("cassandra-driver");

const client = new Client({
  cloud: {
    secureConnectBundle: "./secure-connect-police.zip",
  },
  credentials: {
    username: "YqHloCZoGlcqsrpzCAgbzeBS",
    password:
      "PbbHQJAL5hhiahv0mIA5CE_5l+O6nZt97imcgQRlTb3CmeaXEwrJMZWyRTokYcmW7E4FB6-XGB,aNJLSBNnv_2,RgIp33GoRvC.7MBxecYk.hyF1zRQ2vtSDyYODvlXh",
  },
});

module.exports = {
  async getFromData(query) {
    const result = await client.execute(query);
    return result.rows;
  },

  async getPoliceStations() {
    const query = "SELECT * FROM police.station";
    const result = await client.execute(query);
    return result.rows;
  },

  async postPoliceStation(id, location) {
    const query = `INSERT INTO police.station (id, location) VALUES (${id}, '${location}')`;
    return (result = await client.execute(query));
  },

  async getPoliceStationById(id) {
    const query = `SELECT * FROM police.station WHERE id = ${id}`;
    const result = await client.execute(query);
    return result.rows;
  },

  async patchPoliceStationById(id, location) {
    const query = `UPDATE police.station SET location = '${location}' WHERE id = ${id}`;
    return (result = await client.execute(query));
  },

  async deletePoliceStationById(id) {
    const query = `DELETE FROM police.station WHERE id = ${id}`;
    return (result = await client.execute(query));
  },
};
