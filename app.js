const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const Airport     = require('./models/airport');
const Flight      = require('./models/flight');
const Passenger   = require('./models/passenger');
const Terminal    = require('./models/terminal');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost/mongoose-airport');
// var parent = new Parent( {family_name: "Smith", children: [{given_name: 'Matt'}, {given_name: 'Sarah'}]});

var flight1 = new Flight({from: "CDG France", to: "JFK New-York, USA", airline: "American Airlines"});
var flight2 = new Flight({from: "Heathrow UK", to: "JFK New-York, USA", airline: "British Airways"});
var airport1 = new Airport({name: "JFK", country: "USA", opened: 1/1/1990});
airport1.terminals["Terminal1"] = new Terminal({name: "Terminal1", flights: [{flight1},{flight2}], capacity: 234324});

console.log(flight1);
console.log(flight2);
console.log(airport1);
console.log(airport1.Terminal1);
