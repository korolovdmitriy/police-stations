const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const cassandra = require("cassandra-driver");
const policeStationsRouter = require("./routes/policeStationsRouter");

const PORT = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My Guard",
      version: "1.0.0",
      description: "Police stations API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(cors());

app.use("/policeStations", policeStationsRouter);

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});
