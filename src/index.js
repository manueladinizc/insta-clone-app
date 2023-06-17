/* eslint-disable */

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import FirebaseContext from './context/firebase';
import firebase, { FieldValue } from './lib/firebase';
import './styles/tailwind.css';

createRoot(document.getElementById('root')).render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
);
