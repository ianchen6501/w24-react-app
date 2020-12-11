import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ThemeProvider } from "styled-components";
import { Provider } from 'react-redux';
import store from './redux/store'

const theme = {
  colors : {
    light_gray : '#D0D0D0',
    black : '#d40202',
  },

  fontSizes : {
    h1 : '4.5rem',
    h2 : '3.5rem',
    h3 : '2.3rem',
    h4 : '1.8rem',
    h5 : '1.6rem',
    h6 : '1.3rem'
  }
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>,
  document.getElementById('root')
);

