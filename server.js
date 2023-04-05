require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');

initServer();

function initServer() {
  const port = process.env.SERVER_PORT;
  const host = process.env.SERVER_HOST;
  const app = express();

  app.use(bodyParser.json());
  app.use(express.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  
  routes(app);
  app.listen(port, '0.0.0.0', () => {
    console.log(`🔥 Server Started! ${host}:${port}`);
  });
}
