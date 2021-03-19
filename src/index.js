import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import reducers from '../src/store/index.js'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom'
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const middlewares = [thunk];

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);


ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'));


