require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const cors = require("cors");
// const firebase = require('firebase-admin');
const firebase = require('./src/database/firebase');
const initialController = require("./src/controllers/initialController");
initServer();

function initServer() {
  const port = process.env.SERVER_PORT;
  const host = process.env.SERVER_HOST;
  const app = express();
  const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  }
  app.use(cors(corsOptions))
  app.use(bodyParser.json());
  app.use(express.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  routes(app);
  app.listen(port, () => {
    // const { networkInterfaces } = require('os');

    // const nets = networkInterfaces();
    // const results = Object.create(null); // Or just '{}', an empty object

    // for (const name of Object.keys(nets)) {
    //     for (const net of nets[name]) {
    //         // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
    //         // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
    //         const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
    //         if (net.family === familyV4Value && !net.internal) {
    //             if (!results[name]) {
    //                 results[name] = [];
    //             }
    //             results[name].push(net.address);
    //         }
    //     }
    // }
    // console.log(results);
    console.log(`🔥 Server Started! ${host}:${port}`);
    initialController.initFirebase();
    setInterval(() => {
      initialController.postData();
    }, 5000);
  });
}
