'use strict';

const config = require(process.cwd() + '/config').server;

const controller = require('./bikes.controller');

module.exports = app => {
    app.get(config.path + '/users/:userId/bikes', controller.getBikesByUser);
    app.get(config.path + '/bikes/:bikeId/locate', controller.locateBike);
    //add new api which locates the bike with latest timestamp 
    app.get(config.path + '/bikes/:bikeId/locate/:time', controller.locateBikebyTime); 
    app.get(config.path + '/bikes/:bikeId', controller.getBikeById);
};