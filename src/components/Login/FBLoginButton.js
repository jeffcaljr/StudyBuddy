import React, {Component} from 'react';

class FBLoginButton extends Component{

    render(){

        return(
            <div className="text-center fb-login-button">
                <div className="btn btn-primary"><i className="fa fa-facebook-f" aria-hidden="true"></i><span className="fb-login-button-text">Continue with Facebook</span></div>
            </div>
        );
    }
}

export default FBLoginButton;