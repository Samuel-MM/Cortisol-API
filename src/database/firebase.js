const firebase = require('firebase-admin');

module.exports = {
  initFirebase: function(){
    const firebaseConfig = firebase.initializeApp({
      apiKey: "AIzaSyCnDTuUrsj6EYOM6RUvh28FKN6vrX-wPWY",
      authDomain: "teste-6b0b8.firebaseapp.com",
      databaseURL: "https://teste-6b0b8-default-rtdb.firebaseio.com",
      credential: firebase.credential.cert("./src/database/teste-6b0b8-firebase-adminsdk-que1q-84c0403f90.json"),
      projectId: "teste-6b0b8",
      storageBucket: "teste-6b0b8.appspot.com",
      messagingSenderId: "392869145620",
      appId: "1:392869145620:web:3c1546e3b39e165120cb01",
      measurementId: "G-C5YRDC5Y6T"
    });
    console.log('aqui');
  }
}