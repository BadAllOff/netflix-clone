import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./App";
import { FirebaseContext } from "./context/firebase";
import reportWebVitals from "./reportWebVitals";

var config = {
  apiKey: "AIzaSyA--JS2iKj4tEGJIWviOQIMORPetpbMjhc",
  authDomain: "react-netflix-3b491.firebaseapp.com",
  projectId: "react-netflix-3b491",
  storageBucket: "react-netflix-3b491.appspot.com",
  messagingSenderId: "468456882294",
  appId: "1:468456882294:web:14d2d348d387f21f289f57"
};


const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
