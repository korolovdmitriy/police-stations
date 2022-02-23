const express = require("express");
const policeStationsController = require("../controllers/policeStationsController");
const policeStationsRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      Station:
 *        type: object
 *        required:
 *            - id
 *            - location
 *        properties:
 *            id:
 *              type: string
 *              description: ID of police station
 *            location:
 *              type: string
 *              description: Police station adress
 *        example:
 *            id: afc8a1f8-94b5-11ec-b909-0242ac120002
 *            location: Kiev
 */

/**
 * @swagger
 * tags:
 *   name: Police stations
 *   description: Police stations managing API
 */

/**
 * @swagger
 * /policeStations:
 *   get:
 *     summary: Get all police station locations info
 *     tags: [Police stations]
 *     responses:
 *       200:
 *         description: The list of the police stations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Station'
 */

policeStationsRouter.get("/", policeStationsController.getPoliceStations);

/**
 * @swagger
 * /policeStations:
 *   post:
 *     summary: Adds police station
 *     tags: [Police stations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Station'
 *     responses:
 *       200:
 *         description: The police station was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Station'
 *       500:
 *         description: Server error
 */

policeStationsRouter.post("/", policeStationsController.postPoliceStation);

/**
 * @swagger
 * /policeStations/{id}:
 *   get:
 *     summary: Get police station by id
 *     tags: [Police stations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The police stations id
 *     responses:
 *       200:
 *         description: The police stations by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Station'
 *       404:
 *         description: The police stations was not found
 */

policeStationsRouter.get("/:id", policeStationsController.getPoliceStationById);

/**
 * @swagger
 * /policeStations/{id}:
 *  patch:
 *    summary: Change police station by id
 *    tags: [Police stations]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The police station id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Station'
 *    responses:
 *      200:
 *        description: The police station was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Station'
 *      404:
 *        description: The police station was not found
 */

policeStationsRouter.patch(
  "/:id",
  policeStationsController.patchPoliceStationById
);

/**
 * @swagger
 * /policeStations/{id}:
 *   delete:
 *     summary: Delete police stations by id
 *     tags: [Police stations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The police station id
 *
 *     responses:
 *       200:
 *         description: The police station was deleted
 *       404:
 *         description: The police station was not found
 */

policeStationsRouter.delete(
  "/:id",
  policeStationsController.deletePoliceStationById
);

/**
 * @swagger
 * /policeStations/{id}/crimes:
 *   get:
 *     summary: Get all crimes by police station id
 *     tags: [Police stations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The police stations id
 *     responses:
 *       200:
 *         description: Crimes by police station id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Station'
 *       404:
 *         description: The crimes was not found
 */

policeStationsRouter.get(
  "/:id/crimes",
  policeStationsController.getAllCrimesByPoliceStationId
);

/**
 * @swagger
 * /policeStations/{id}/checkCrimes:
 *   get:
 *     summary: Check all crimes by police station id
 *     tags: [Police stations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The police stations id
 *     responses:
 *       200:
 *         description: Crimes by police station id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Station'
 *       404:
 *         description: The crimes was not found
 */

policeStationsRouter.get(
  "/:id/checkCrimes",
  policeStationsController.checkCrimesByPoliceStationId
);

module.exports = policeStationsRouter;
