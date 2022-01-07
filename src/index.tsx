import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import { ThemeProvider } from './Hooks/theme';
import { AuthProvider } from './Hooks/Auth';



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

