import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { onLodingSignIn } from './actions/auth_actions';
import store from './store';
// import FA from 'react-fontawesome';
store.dispatch(onLodingSignIn());
ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <App />
    </Provider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
