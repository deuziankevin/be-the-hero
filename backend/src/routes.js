const express  = require('express');
const connection = require('./database/connection');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
//casos
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);
//perfis
routes.get('/profile', ProfileController.index);
//logins
routes.post('/sessions', SessionController.create);

module.exports = routes;