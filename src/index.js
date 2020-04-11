import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';

import './index.css';
import App from './App';

import store from "./redux/store";
import ParticlesBg from "particles-bg";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ParticlesBg type="cobweb" bg={true} style={{width: '100%', height: '100%'}}/>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


