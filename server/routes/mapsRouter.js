const express = require('express');
const mapsController = require('../controllers/mapsController.js')
const mapsRouter = express.Router()

mapsRouter.post('/', mapsController.getMap,  (req, res) => {

  return res.status(200).json(res.locals.courtList)
});


module.exports = mapsRouter;