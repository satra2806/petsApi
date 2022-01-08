const mongoose = require('mongoose');
var User = require('./../model/petdata.js');
const Pet = mongoose.model('petData');

module.exports = (app) => {

  app.get(`/api/mypets` ,async (req, res) => {
    let pet = await Pet.find();
    return res.status(200).send(pet);
  });



}