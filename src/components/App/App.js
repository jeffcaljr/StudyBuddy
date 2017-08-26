import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from '../routes';
import './App.css';
import logo from '../../sb_logo.png';

class App extends Component {
  render() {
    return (
        <div className="container-fluid">

            <div className="logo-container text-center">
                <img className="logo" src={logo} alt="StudyBuddy"/>
            </div>

            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
