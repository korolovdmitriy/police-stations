const model = require("../models/model");

exports.getPoliceStations = (req, res) => {
  const query = "SELECT * FROM police.station";
  model
    .getFromData(query)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(404).send(error));
};

exports.postPoliceStation = (req, res) => {
  const station = req.body;
  const query = `INSERT INTO police.station (id, location) VALUES (${station.id}, '${station.location}')`;
  model
    .getFromData(query)
    .then(() => res.status(200).json(station))
    .catch((error) => res.status(404).send(error));
};

exports.getPoliceStationById = (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.sendStatus(404);
  }
  const query = `SELECT * FROM police.station WHERE id = ${id}`;
  model
    .getFromData(query)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(404).send(error));
};

exports.pathPoliceStationById = (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.sendStatus(404);
  }
  //   patch by id
  res.send({ id: 230, location: "Kharkiv, st. Sumska" });
};

exports.deletePoliceStationById = (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.sendStatus(404);
  }
  const query = `DELETE FROM police.station WHERE id = ${id}`;
  model
    .getFromData(query)
    .then(() => res.status(200).send("The police station was deleted"))
    .catch((error) => res.status(404).send(error));
};
