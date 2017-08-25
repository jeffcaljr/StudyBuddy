import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';


class Login extends Component{
    render(){

        return(

            <div className="login-container container container-table ui-card">
                <div className=" row vertical-center-row">
                    <h2 className="text-center">Sign In</h2>
                    <CredentialInput/>
                    <p className="text-center">or</p>
                    <FBLoginButton/>

                    <div className="text-right login-link-container"><Link to="/"><span className="login-link text-muted">Don't have an account? Register!</span></Link></div>
                </div>
            </div>
        );
    }
}

class CredentialInput extends Component{
    
    render(){
        
        return(
            <div className="credential-input">
                <div className="email-input">
                    <div className="input-group">
                        <span className="input-group-addon bg-primary text-white" id="basic-addon1"><i className="fa fa-user" aria-hidden="true"></i></span>
                        <input type="email" className="form-control" placeholder="Email" aria-describedby="basic-addon1"/>
                    </div>
                </div>
                <div className="password-input">
                    <div className="input-group">
                        <span className="input-group-addon bg-primary text-white" id="basic-addon1"><i className="fa fa-lock" aria-hidden="true"></i></span>
                        <input type="password" className="form-control" placeholder="Password" aria-describedby="basic-addon1"/>
                    </div>
                </div>
            </div>
        );
    }
}

class FBLoginButton extends Component{

    render(){

        return(
            <div className="text-center fb-login-button">
                <div className="btn btn-primary"><i className="fa fa-facebook-f" aria-hidden="true"></i><span className="fb-login-button-text">Continue with Facebook</span></div>
            </div>
        );
    }
}

export default  Login;