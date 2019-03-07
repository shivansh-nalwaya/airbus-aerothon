module.exports = function(app) {
  const FlightsController = require("../controllers/FlightsController.js");

  app.get("/", FlightsController.get);
  app.get("/:id", FlightsController.show);
  app.post("/", FlightsController.create);
  app.put("/:id", FlightsController.update);
  app.delete("/:id", FlightsController.delete);
};
