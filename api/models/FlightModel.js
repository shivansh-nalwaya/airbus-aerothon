var mongoose = require("../config/mongoose");

const flight_schema = new mongoose.Schema({
  msn: Number,
  harness_length: Number,
  gross_weight: Number,
  atmospheric_pressure: Number,
  room_temperature: Number,
  airport: String,
  source: String,
  destination: String,
  left_wing_fuel_capacity: Number,
  right_wing_fuel_capacity: Number,
  left_wing_fuel_quantity: Number,
  left_wing_fuel_quantity: Number,
  max_altitude: Number,
  flight_number: String
});

module.exports = mongoose.model("flights", flight_schema);
