const mongoose = require('mongoose');

const Terminal = require('./terminal').Terminal;

// const Terminal = mongoose.model('Terminal');

const AirportSchema = new mongoose.Schema({
  name: String,
  country: String,
  terminals: [Terminal.schema],
  opened: Date
});

const Airport = mongoose.model('Airport', AirportSchema);

module.exports = Airport;
