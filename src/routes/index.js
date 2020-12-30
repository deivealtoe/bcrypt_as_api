const BcryptController = require('../controllers/BcryptController');
const express = require('express');

const routes = express.Router();

routes.post('/create_hash', BcryptController.createHash);
routes.post('/compare_hash', BcryptController.compareHash);

module.exports = routes;