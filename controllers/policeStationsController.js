const model = require("../models/policeStationsModel");
const policeStationSevises = require("../services/crimeService");

module.exports = {
  getPoliceStations(req, res, next) {
    model
      .getPoliceStations()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => next(error));
  },

  postPoliceStation(req, res, next) {
    const { id, location } = req.body;
    model
      .postPoliceStation(id, location)
      .then(() => res.status(200).send("The police station was add"))
      .catch((error) => next(error));
  },

  getPoliceStationById(req, res, next) {
    const id = req.params.id;
    if (!id) {
      res.sendStatus(404);
    }
    model
      .getPoliceStationById(id)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => next(error));
  },

  patchPoliceStationById(req, res, next) {
    const { id, location } = req.body;
    model
      .patchPoliceStationById(id, location)
      .then(() => res.status(200).json("The police station was update"))
      .catch((error) => next(error));
  },

  deletePoliceStationById(req, res, next) {
    const id = req.params.id;
    if (!id) {
      res.sendStatus(404);
    }
    model
      .deletePoliceStationById(id)
      .then(() => res.status(200).send("The police station was deleted"))
      .catch((error) => next(error));
  },

  getAllCrimesByPoliceStationId(req, res, next) {
    const id = req.params.id;
    if (!id) {
      res.sendStatus(404);
    }
    policeStationSevises
      .getAllCrimesByPoliceStationId(id)
      .then((result) => {
        res.status(200).json(result.data);
      })
      .catch((error) => next(error));
  },

  checkCrimesByPoliceStationId(req, res, next) {
    const id = req.params.id;
    if (!id) {
      res.sendStatus(404);
    }
    policeStationSevises
      .checkAllCrimesByPoliceStationId(id)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => next(error));
  },
};
