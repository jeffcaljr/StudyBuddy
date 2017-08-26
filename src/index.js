import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import Main from "./components/Main/Main";
import {BrowserRouter} from 'react-router-dom';

class MainRouter extends Component{
    render(){
        return(
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
