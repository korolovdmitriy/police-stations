const { Client } = require("cassandra-driver");

module.exports = new Client({
  cloud: {
    secureConnectBundle: "./secure-connect-police.zip",
  },
  credentials: {
    username: "YqHloCZoGlcqsrpzCAgbzeBS",
    password:
      "PbbHQJAL5hhiahv0mIA5CE_5l+O6nZt97imcgQRlTb3CmeaXEwrJMZWyRTokYcmW7E4FB6-XGB,aNJLSBNnv_2,RgIp33GoRvC.7MBxecYk.hyF1zRQ2vtSDyYODvlXh",
  },
});
