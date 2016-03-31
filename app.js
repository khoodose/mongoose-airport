const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const Passenger   = require('./models/passenger');
const Flight      = require('./models/flight');
const Terminal    = require('./models/terminal');
const Airport     = require('./models/airport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost/mongoose-airport');
// var parent = new Parent( {family_name: "Smith", children: [{given_name: 'Matt'}, {given_name: 'Sarah'}]});

var flight1 = new Flight({
  from: "CDG France",
  to: "JFK New-York, USA",
  airline: "American Airlines"
});

flight1.save();
console.log(flight1);


var flight2 = new Flight({
  from: "Heathrow UK",
  to: "JFK New-York, USA",
  airline: "British Airways"
});

flight2.save();
console.log(flight2);


var airport1 = new Airport({
  name: "JFK",
  country: "USA",
  opened: new Date("October 13, 1990 11:13:00")
});

airport1.terminals.push (new Terminal({
  name: "Terminal1",
  flights: [flight1, flight2],
  capacity: 234324
}));

airport1.save();
console.log(airport1);
console.log(airport1.terminals);
