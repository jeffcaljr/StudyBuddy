import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Registration.css';
import CredentialRegistration from "./CredentialRegistration";
import logo from '../../sb_logo.png';

class RegistrationBox extends Component{

    render(){
        return(

            <div>
                <div className="logo-container text-center">
                    <img className="logo" src={logo} alt="StudyBuddy"/>
                </div>
                <div className="login-container container container-table ui-card">
                    <div className=" row vertical-center-row">
                        <Link to="/" className="back-to-login">
                            <i className="fa fa-long-arrow-left back-to-login-icon" aria-hidden="true"></i>
                            <span className="back-to-login-text">Login</span>
                        </Link>
                        <h2 className="text-center">Register</h2>
                        <CredentialRegistration/>

                    </div>
                </div>
            </div>
        );
    }
}



export default RegistrationBox;