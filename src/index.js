import React from 'react';
import {render} from 'react-dom';
import './assets/styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from "./store/Store";
import {Provider} from "react-redux";

const store = configureStore();
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
