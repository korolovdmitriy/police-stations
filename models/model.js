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

exports.getFromData = async (query) => {
  //   const query = "SELECT * FROM police.station";
  await client.connect();
  const rs = await client.execute(query);
  await client.shutdown();
  return rs.rows;
};
