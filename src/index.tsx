import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/indexStore';


if(localStorage.getItem('visited')){
    ReactDOM.render(
        <BrowserRouter>
           <Provider store={store}><App /></Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
} else {
    ReactDOM.render(
        <WelcomeScreen />,
        document.getElementById('root')
    )
}


