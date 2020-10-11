import React from 'react';
import {render} from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';
import {GlobalStyles}from './global-styles';
import 'normalize.css';

render(
      <React.Fragment>
        <GlobalStyles/>
        <App/>
      </React.Fragment>,
      document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
