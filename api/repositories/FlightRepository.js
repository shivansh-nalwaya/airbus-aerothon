var Flight = require("../models/FlightModel");

module.exports = {
  all: () => {
    return Flight.find();
  },

  find: id => {
    return Flight.find({ _id: id });
  },

  create: data => {
    var flight = new Flight(data);
    return flight.save();
  },

  update: (id, data) => {
    return Flight.findOneAndUpdate(
      { _id: id },
      {
        $set: { ...data }
      }
    );
  },

  delete: id => {
    return Flight.deleteOne({ _id: id });
  }
};
