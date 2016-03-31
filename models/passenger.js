const mongoose = require('mongoose');

const PassengerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dob: Date
});

const Passenger = mongoose.model('Passenger', PassengerSchema);

module.exports = Passenger;
