import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";

import {store, persistor} from "./redux/store";

import './index.css';
import App from './App';

import ParticlesBg from "particles-bg";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <ParticlesBg type="cobweb" bg={true} style={{width: '100%', height: '100%'}}/>
                <App/>
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


