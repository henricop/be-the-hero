const express = require('express');
const OngControllers = require('./controllers/OngsControllers');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionCrontroller = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionCrontroller.create);

routes.get('/ongs',OngControllers.index);
routes.post('/ongs',OngControllers.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents',IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id',IncidentsController.delete);



module.exports = routes;