import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('root')); // Pointing to the 'root' element in the public/index.html where our app will be attached

// This file serves as the entry point to our React application.
// Whenever changes are made to the React components, this file 
// ensures they get rendered and displayed on the page.