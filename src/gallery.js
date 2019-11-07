import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Top from './Components/Top';
import Images from './Components/Images';
import * as serviceWorker from './serviceWorker';

ReactDOM.render([<Top />, <Images />], document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
