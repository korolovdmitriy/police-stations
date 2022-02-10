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
  try {
    const station = req.body;
    //   add to bd
    res.send(station);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.getPoliceStationById = (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.sendStatus(404);
  }
  //   find in db by id
  res.send({ id: 230, location: "Kharkiv, st. Sumska" });
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
  //  delete by id
  res.sendStatus(200);
};
