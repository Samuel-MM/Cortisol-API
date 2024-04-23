const firebase = require('firebase-admin');
module.exports = {

  getData: function (req, res) {
    console.log('chegou');
    res.status(200).json({
      error: false,
      code: 200,
      data: "Teste"
    });
  },

  initFirebase: function(){
    const firebaseInit = require('../database/firebase');
    firebaseInit.initFirebase();
  },

  postData: function (req, res) {
    const firebaseDB = firebase.database();
    const ref = firebaseDB.ref("measures");
    const amount = 1;
    ref.on('value', (snapshot) => {
      data = snapshot.val();
      const finalValue = Math.abs(data/amount);
      firebaseDB.ref("data").set(finalValue);
    }, (errorObject) => {
      console.log('The read failed: ' + errorObject.name);
    });
  },

  testData: function (req, res) {
    console.log(req.body.title);
    res.status(200).json({
      error: false,
      code: 200,
      voltage: 267,
      dateTime: Date(),
      device: 1
    });
  }
};
