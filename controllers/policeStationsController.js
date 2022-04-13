const model = require("../models/policeStationsModel");
const ApiError = require("../exceptions/api-error");
const policeStationSevises = require("../services/crimeService");

module.exports = {
  getPoliceStations(req, res, next) {
    model
      .getPoliceStations()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => next(ApiError.BadRequest(error)));
  },

  postPoliceStation(req, res, next) {
    const { location } = req.body;
    if (!location || location === "") {
      return next(ApiError.BadRequest("Invalid request body"));
    }
    model
      .postPoliceStation(location)
      .then(() => res.status(200).send("The police station was add"))
      .catch((error) => next(ApiError.BadRequest(error)));
  },

  getPoliceStationById(req, res, next) {
    const id = req.params.id;
    if (!id) {
      return next(ApiError.BadRequest("Incorrect parameter value"));
    }
    model
      .getPoliceStationById(id)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => next(ApiError.BadRequest(error)));
  },

  patchPoliceStationById(req, res, next) {
    const id = req.params.id;
    if (!id) {
      return next(ApiError.BadRequest("Incorrect parameter value"));
    }
    const { location } = req.body;
    if (!location || location === "") {
      return next(ApiError.BadRequest("Invalid request body"));
    }
    model
      .patchPoliceStationById(id, location)
      .then(() => res.status(200).json("The police station was update"))
      .catch((error) => next(ApiError.BadRequest(error)));
  },

  deletePoliceStationById(req, res, next) {
    const id = req.params.id;
    if (!id) {
      return next(ApiError.BadRequest("Incorrect parameter value"));
    }
    model
      .deletePoliceStationById(id)
      .then(() => res.status(200).send("The police station was deleted"))
      .catch((error) => next(ApiError.BadRequest(error)));
  },

  getAllCrimesByPoliceStationId(req, res, next) {
    const id = req.params.id;
    if (!id) {
      return next(ApiError.BadRequest("Incorrect parameter value"));
    }
    policeStationSevises
      .getAllCrimesByPoliceStationId(id)
      .then((result) => {
        res.status(200).json(result.data);
      })
      .catch((error) => next(ApiError.BadRequest(error)));
  },

  checkCrimesByPoliceStationId(req, res, next) {
    const id = req.params.id;
    if (!id) {
      return next(ApiError.BadRequest("Incorrect parameter value"));
    }
    policeStationSevises
      .checkAllCrimesByPoliceStationId(id)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => next(ApiError.BadRequest(error)));
  },
};
