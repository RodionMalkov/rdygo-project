import React from "react";
import ReactDOM from "react-dom";
import "./assets/stylesheets/style.scss";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCNwElaHMfbwImzobFLaw0KYfjod3DsPVw",
  authDomain: "rdygo-ru.firebaseapp.com",
  projectId: "rdygo-ru",
  storageBucket: "rdygo-ru.appspot.com",
  messagingSenderId: "1081017487937",
  appId: "1:1081017487937:web:a70323b52b7eb51d90ecc0",
  measurementId: "G-CNSZRCKQLT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import App from "./template/App";

ReactDOM.render(
    <App />,
    document.getElementById(`root`)
);

