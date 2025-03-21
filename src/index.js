import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot for React 18
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { CssBaseline } from '@mui/material';
import './App.css'; // Import your CSS file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>
);