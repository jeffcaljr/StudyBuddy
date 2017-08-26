import React, {Component} from 'react';

class AcceptButton extends Component{
    render(){
        return (
            <div className="reject discover-button-container d-inline-block">
                <button className="btn btn-success discover-button"><i className="fa fa-check fa-2x" aria-hidden="true"></i></button>
            </div>
        );
    }
}

export default AcceptButton;