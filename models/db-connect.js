const { Client } = require("cassandra-driver");
const dbConfig = require("../configs/db-config.json");

module.exports = new Client(dbConfig);
