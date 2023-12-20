import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import App from '../client/App.jsx';
import { store } from '../client/redux/store.js';

describe('App', () => {
  test('renders without crashing', () => {
    const root = createRoot(document.createElement('div'));
    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});