import React from 'react';
import App from './features/App.jsx';
import { store } from './app/store'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';


// This file serves as the entry point to our React application.
// Whenever changes are made to the React components, this file 
// ensures they get rendered and displayed on the page.

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<Provider store = { store }>
    <App />
</Provider>, 
);