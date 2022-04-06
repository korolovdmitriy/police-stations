const express = require("express");
const policeStationsController = require("../controllers/policeStationsController");
const policeStationsRouter = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const checkPoliceRoleMiddleware = require("../middlewares/checkPoliceRole-middleware");

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
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
 *     security:
 *       - bearerAuth: []
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
 *       400:
 *         description: Bad request
 *       401:
 *         description: User not authorized
 *       403:
 *         description: Access denied
 *       500:
 *         description: Unexpected error
 */

policeStationsRouter.get(
  "/",
  authMiddleware,
  policeStationsController.getPoliceStations
);

/**
 * @swagger
 * /policeStations:
 *   post:
 *     summary: Adds police station
 *     security:
 *       - bearerAuth: []
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
 *       400:
 *         description: Bad request
 *       401:
 *         description: User not authorized
 *       403:
 *         description: Access denied
 *       500:
 *         description: Unexpected error
 */

policeStationsRouter.post(
  "/",
  authMiddleware,
  checkPoliceRoleMiddleware,
  policeStationsController.postPoliceStation
);

/**
 * @swagger
 * /policeStations/{id}:
 *   get:
 *     summary: Get police station by id
 *     security:
 *       - bearerAuth: []
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
 *       400:
 *         description: Bad request
 *       401:
 *         description: User not authorized
 *       403:
 *         description: Access denied
 *       500:
 *         description: Unexpected error
 */

policeStationsRouter.get(
  "/:id",
  authMiddleware,
  checkPoliceRoleMiddleware,
  policeStationsController.getPoliceStationById
);

/**
 * @swagger
 * /policeStations/{id}:
 *  patch:
 *    summary: Change police station by id
 *    security:
 *       - bearerAuth: []
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
  authMiddleware,
  checkPoliceRoleMiddleware,
  policeStationsController.patchPoliceStationById
);

/**
 * @swagger
 * /policeStations/{id}:
 *   delete:
 *     summary: Delete police stations by id
 *     security:
 *       - bearerAuth: []
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
 *       400:
 *         description: Bad request
 *       401:
 *         description: User not authorized
 *       403:
 *         description: Access denied
 *       500:
 *         description: Unexpected error
 */

policeStationsRouter.delete(
  "/:id",
  authMiddleware,
  checkPoliceRoleMiddleware,
  policeStationsController.deletePoliceStationById
);

/**
 * @swagger
 * /policeStations/{id}/crimes:
 *   get:
 *     summary: Get all crimes by police station id
 *     security:
 *       - bearerAuth: []
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
 *       400:
 *         description: Bad request
 *       401:
 *         description: User not authorized
 *       403:
 *         description: Access denied
 *       500:
 *         description: Unexpected error
 */

policeStationsRouter.get(
  "/:id/crimes",
  authMiddleware,
  checkPoliceRoleMiddleware,
  policeStationsController.getAllCrimesByPoliceStationId
);

/**
 * @swagger
 * /policeStations/{id}/checkCrimes:
 *   get:
 *     summary: Check all crimes by police station id
 *     security:
 *       - bearerAuth: []
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
 *       400:
 *         description: Bad request
 *       401:
 *         description: User not authorized
 *       403:
 *         description: Access denied
 *       500:
 *         description: Unexpected error
 */

policeStationsRouter.get(
  "/:id/checkCrimes",
  authMiddleware,
  checkPoliceRoleMiddleware,
  policeStationsController.checkCrimesByPoliceStationId
);

module.exports = policeStationsRouter;
