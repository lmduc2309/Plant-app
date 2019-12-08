import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAoTOXNkfzsMKIUiYgN_E-cWqdfW1JUq0I",
    authDomain: "fir-rn-d70df.firebaseapp.com",
    databaseURL: "https://fir-rn-d70df.firebaseio.com",
    projectId: "fir-rn-d70df",
    storageBucket: "",
    messagingSenderId: "530875484178",
    appId: "1:530875484178:web:1788e53ce9cf563646f0cb",
    measurementId: "G-CVRDS898H2"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);