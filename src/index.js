// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { firebase, FieldValue } from './lib/firebase';
// import FirebaseContext from './context/firebase';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
//   );

import React from 'react';
import ReactDOM from 'react-dom';
import { firebase, FieldValue } from './lib/firebase';
import FirebaseContext from './context/firebase';
import App from './App';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
     <App />
    <h1 className="text-red-500">Hello, World</h1>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);