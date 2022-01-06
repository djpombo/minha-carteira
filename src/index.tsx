import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import { ThemeProvider } from './Hooks/theme';



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

