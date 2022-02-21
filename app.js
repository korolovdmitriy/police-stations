const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const policeStationsRouter = require("./routes/policeStationsRouter");
const swaggerConfig = require("./swagger-config.json");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const specs = swaggerJsDoc(swaggerConfig);

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(cors());

app.use(morgan("dev"));
app.use(
  morgan("common", {
    skip: (req, res) => {
      return res.statusCode < 400;
    },
    stream: fs.createWriteStream(path.join(__dirname, "access.log"), {
      flags: "a",
    }),
  })
);

app.use("/policeStations", policeStationsRouter);

app.use((req, res, next) => {
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});
