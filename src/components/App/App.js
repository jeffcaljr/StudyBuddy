import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from '../routes';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <img src="../../logo.png" className="img-fluid" alt="Responsive"/>

            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
