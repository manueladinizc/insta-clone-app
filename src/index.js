// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { firebase, FieldValue } from './lib/firebase';
// import FirebaseContext from './context/firebase';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
//   );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import FirebaseContext from './context/firebase';
// import { firebase, FieldValue } from './lib/firebase';
// import App from './App';

// ReactDOM.render(
//   <FirebaseContext.Provider value={{ firebase, FieldValue }}>
//      <App />
//     <h1 className="text-red-500">Hello, World</h1>
//   </FirebaseContext.Provider>,
//   document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// import FirebaseContext from './context/firebase';
// import { firebase, FieldValue } from './lib/firebase';
// import './styles/app.css';

// ReactDOM.render(
//   <FirebaseContext.Provider value={{ firebase, FieldValue }}>
//     <App />
//   </FirebaseContext.Provider>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import firebase, { FieldValue } from './lib/firebase'; // Update the import statement
import './styles/app.css';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);


