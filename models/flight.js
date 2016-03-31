const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  from: String,
  to: String,
  airline: String
});

const Flight = mongoose.model('Flight', FlightSchema);

module.exports = Flight;
