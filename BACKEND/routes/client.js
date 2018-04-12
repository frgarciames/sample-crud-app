const express = require('express')
const clientController = require('../controllers/client')

const api = express.Router();

api.get('/client', clientController.findAllNoDetails);
api.get('/client/details', clientController.findAllWithDetails);
api.get('/client/:id', clientController.findById);
api.post('/client', clientController.save);
api.delete('/client/:id', clientController.remove);
api.put('/client/:id', clientController.update);

module.exports = api;