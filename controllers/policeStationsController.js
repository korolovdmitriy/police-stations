const model = require("../models/policeStationsModel");
const checkRoleService = require("../services/checkRoleService");
const policeStationSevises = require("../services/crimeService");

module.exports = {
  getPoliceStations(req, res) {
    const authorization = req.headers.authorization;
    try {
      checkRoleService.checkRole(authorization);
      model
        .getPoliceStations()
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((error) => res.status(404).send(error));
    } catch (error) {
      return res.status(401).send(error.message);
    }
  },

  postPoliceStation(req, res) {
    const authorization = req.headers.authorization;
    try {
      checkRoleService.checkRole(authorization);
      const { id, location } = req.body;
      model
        .postPoliceStation(id, location)
        .then(() => res.status(200).send("The police station was add"))
        .catch((error) => res.status(404).send(error));
    } catch (error) {
      return res.status(401).send(error.message);
    }
  },

  getPoliceStationById(req, res) {
    const authorization = req.headers.authorization;
    try {
      checkRoleService.checkRole(authorization);
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
    } catch (error) {
      return res.status(401).send(error.message);
    }
  },

  patchPoliceStationById(req, res) {
    const authorization = req.headers.authorization;
    try {
      checkRoleService.checkRole(authorization);
      const { id, location } = req.body;
      model
        .patchPoliceStationById(id, location)
        .then(() => res.status(200).json("The police station was update"))
        .catch((error) => res.status(404).send(error));
    } catch (error) {
      return res.status(401).send(error.message);
    }
  },

  deletePoliceStationById(req, res) {
    const authorization = req.headers.authorization;
    try {
      checkRoleService.checkRole(authorization);
      const id = req.params.id;
      if (!id) {
        res.sendStatus(404);
      }
      model
        .deletePoliceStationById(id)
        .then(() => res.status(200).send("The police station was deleted"))
        .catch((error) => res.status(404).send(error));
    } catch (error) {
      return res.status(401).send(error.message);
    }
  },

  getAllCrimesByPoliceStationId(req, res) {
    const authorization = req.headers.authorization;
    try {
      checkRoleService.checkRole(authorization);
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
    } catch (error) {
      return res.status(401).send(error.message);
    }
  },

  checkCrimesByPoliceStationId(req, res) {
    const authorization = req.headers.authorization;
    try {
      checkRoleService.checkRole(authorization);
      const id = req.params.id;
      if (!id) {
        res.sendStatus(404);
      }
      policeStationSevises
        .checkAllCrimesByPoliceStationId(id)
        .then((result) => {
          res.status(200).json(result);
        });
    } catch (error) {
      return res.status(401).send(error.message);
    }
  },
};
