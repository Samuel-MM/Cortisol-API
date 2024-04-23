const initialController = require("./controllers/initialController");
module.exports = function (app) {
  
  app.get("/", function (req, res) {
    res.send("Hello Word");
  });

  app.get("/api/inicio/", initialController.getData);
  app.get("/api/retorno-dados/", initialController.postData);
  app.post("/api/test-data/", initialController.testData);

};