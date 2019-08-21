import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import rootReducers from './reducers';
import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk'

const middleware = [thunk];

const store = createStore(rootReducers, compose(
    applyMiddleware(...middleware)));


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
