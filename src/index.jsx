import React from "react";
import {createRoot} from 'react-dom/client'
import App from './components/App'
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import {ActionsType} from './actions/useractions'
import 'bootstrap/dist/css/bootstrap.css';


const store = configureStore({
    reducer: rootReducer,
})

const userToken = localStorage.getItem('userToken');

if(userToken){
    store.dispatch({
        type: ActionsType.AUTHENTICATE_USER,
        // sending some information here is a problem
    })
}

const root = createRoot(document.getElementById('main'))
root.render(
    <Provider store = {store}>
        <App/>
    </Provider>
)