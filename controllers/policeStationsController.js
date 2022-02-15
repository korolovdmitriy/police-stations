const model = require("../models/model");
const policeStationSevises = require("../servises/policeStationsServises");

module.exports = {
  getPoliceStations(req, res) {
    model
      .getPoliceStations()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => res.status(404).send(error));
  },

  postPoliceStation(req, res) {
    const { id, location } = req.body;

    model
      .postPoliceStation(id, location)
      .then(() => res.status(200).send("The police station was add"))
      .catch((error) => res.status(404).send(error));
  },

  getPoliceStationById(req, res) {
    const id = req.params.id;
    if (!id) {
      res.sendStatus(404);
    }
    model
      .getPoliceStationById(id)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => res.status(404).send(error));
  },

  patchPoliceStationById(req, res) {
    const { id, location } = req.body;
    model
      .patchPoliceStationById(id, location)
      .then(() => res.status(200).json("The police station was update"))
      .catch((error) => res.status(404).send(error));
  },

  deletePoliceStationById(req, res) {
    const id = req.params.id;
    if (!id) {
      res.sendStatus(404);
    }
    model
      .deletePoliceStationById(id)
      .then(() => res.status(200).send("The police station was deleted"))
      .catch((error) => res.status(404).send(error));
  },

  getAllCrimesByPoliceStationId(req, res) {
    const id = req.params.id;
    if (!id) {
      res.sendStatus(404);
    }
    policeStationSevises
      .getAllCrimesByPoliceStationId(id)
      .then((result) => {
        res.status(200).json(result.data);
      })
      .catch((error) => res.status(404).send(error));
  },
};
