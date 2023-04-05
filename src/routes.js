const initialController = require("./controllers/initialController");
module.exports = function (app) {
  
  app.get("/", function (req, res) {
    res.send("Hello Word");
  });

  app.get("/api/inicio/", initialController.getData);
  app.post("/api/retorno-dados/", initialController.postData);

};