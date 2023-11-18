import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCvMvuoCjx_RqAeQ0DrLMwCOJgXWbaJhro",
  authDomain: "proyectoreactjs-2151b.firebaseapp.com",
  projectId: "proyectoreactjs-2151b",
  storageBucket: "proyectoreactjs-2151b.appspot.com",
  messagingSenderId: "1001970967653",
  appId: "1:1001970967653:web:57ee05c22ee653c483928c",
  measurementId: "G-S8PEEPMPQ0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
