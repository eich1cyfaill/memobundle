import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen";


if(localStorage.getItem('visited')){
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )
} else {
    ReactDOM.render(
        <WelcomeScreen />,
        document.getElementById('root')
    )
}


