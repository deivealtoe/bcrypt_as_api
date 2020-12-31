const BcryptController = require('../controllers/BcryptController');
const express = require('express');

const routes = express.Router();

routes.post('/create_hash', BcryptController.createHash);
routes.post('/compare_hash', BcryptController.compareHash);
routes.get('/get_all_hashes_saved', BcryptController.getAllHashesSaved);

module.exports = routes;