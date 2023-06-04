import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebaseContext } from './store/Context';
import firebase from './firebase/config';
import Context from './store/Context';

ReactDOM.render(
    <firebaseContext.Provider value={{ firebase }}>
        <Context>
            <App />
        </Context>
    </firebaseContext.Provider>,
    document.getElementById('root')
);
