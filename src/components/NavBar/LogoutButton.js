import React, {Component} from 'react';

class LogoutButton extends Component{

    logout(){
        alert("logging out");
    }


    render(){
        return(
            <div className="logout-button-container">
                <button className="btn btn-danger text-white" onClick={() => this.logout()}>Logout</button>
            </div>
        );
    }
}

export default LogoutButton;