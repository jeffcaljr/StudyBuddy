import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Login.css';
import Main from "../Main/Main";
import FBLoginButton from "./FBLoginButton";
import CredentialInput from "./CredentialInput";
import logo from '../../sb_logo.png';


class Login extends Component{

    loadApp(){
        // ReactDOM.render(<Main/>, document.getElementById('root'));
    }

    render(){
        return(

            <div className="container-fluid">
                <div className="logo-container text-center">
                    <img className="logo" src={logo} alt="StudyBuddy"/>
                </div>

                <div className="login-container container container-table ui-card">
                    <div className=" row vertical-center-row">
                        <h2 className="text-center">Sign In</h2>
                        <CredentialInput/>
                        <div className="btn-container text-center">
                            <Link to="/">
                                <button className="btn btn-primary text-white sign-in-button" onClick={() => this.loadApp()}>Sign In</button>
                            </Link>

                        </div>
                        <p className="text-center">or</p>
                        <FBLoginButton/>

                        <div className="text-right register-link-container"><Link to="/register"><span className="register-link text-muted">Don't have an account? Register!</span></Link></div>
                    </div>
                </div>
            </div>
        );
    }
}





export default  Login;