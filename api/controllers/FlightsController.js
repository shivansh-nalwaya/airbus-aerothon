const FlightRepository = require("../repositories/FlightRepository");

module.exports = {
  get: function(req, res) {
    FlightRepository.all()
      .then(data => {
        res.send({
          success: true,
          data
        });
      })
      .catch(message => {
        res.send({
          success: false,
          message
        });
      });
  },

  show: function(req, res) {
    var id = req.params.id;
    FlightRepository.find(id)
      .then(resp => {
        result = resp[0];
        res.send({
          result
        });
      })
      .catch(message => {
        res.send({
          success: false,
          message
        });
      });
  },

  create: function(req, res) {
    var data = req.body;
    FlightRepository.create(data)
      .then(result => {
        res.send({
          success: true,
          result: result
        });
      })
      .catch(message => {
        res.send({
          success: false,
          message
        });
      });
  },

  update: function(req, res) {
    var id = req.params.id;
    var data = req.body;
    FlightRepository.update(id, data)
      .then(result => {
        res.send({
          success: true,
          id: result._id
        });
      })
      .catch(message => {
        res.send({
          success: false,
          message
        });
      });
  },

  delete: function(req, res) {
    var id = req.params.id;
    FlightRepository.delete(id)
      .then(result => {
        res.send({
          success: true
        });
      })
      .catch(message => {
        res.send({
          success: false,
          message
        });
      });
  }
};
