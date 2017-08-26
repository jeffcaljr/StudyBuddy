import React, {Component} from 'react';

class CredentialRegistration extends Component{
    render(){

        return(
            <div className="credential-registration">
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
                <div className="confirm-password-input">
                    <div className="input-group">
                        <span className="input-group-addon bg-primary text-white" id="basic-addon1"><i className="fa fa-lock" aria-hidden="true"></i></span>
                        <input type="password" className="form-control" placeholder="Confirm Password" aria-describedby="basic-addon1"/>
                    </div>
                </div>

                <div className="btn-container text-center">
                    <button className="btn btn-primary text-white">Register</button>
                </div>

            </div>
        );
    }
}

export default  CredentialRegistration;