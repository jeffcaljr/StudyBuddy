import React, {Component} from 'react';

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

export default  CredentialInput;