const mongoose = require('mongoose');

const Flight = require('./flight').Flight;

// const Flight = mongoose.model('Flight');

const TerminalSchema = new mongoose.Schema({
  name: String,
  flights: [Flight.schema],
  capacity: Number
});

const Terminal = mongoose.model('Terminal', TerminalSchema);

module.exports = Terminal;
