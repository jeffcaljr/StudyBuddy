import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import MainRouter from "./components/Main/MainRouter";



ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
