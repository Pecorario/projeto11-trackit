import React from 'react';
import ReactDOM from 'react-dom/client';

import AppContext from './context/AppContext';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './style/theme';

import GlobalStyle from './style/global';
import ResetStyle from './style/reset';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />

      <BrowserRouter>
        <AppContext>
          <App />
        </AppContext>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
