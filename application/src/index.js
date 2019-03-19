import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';


import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from "./Store/store";


ReactDOM.render((
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <HashRouter>
                <App />
            </HashRouter>
        </PersistGate>
    </Provider>
), document.getElementById('root'));
