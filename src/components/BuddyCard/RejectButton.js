import React, {Component} from 'react';

class RejectButton extends Component{
    render(){
        return (
            <div className="reject discover-button-container d-inline-block ">
                <button className="btn btn-danger discover-button"><i className="fa fa-times fa-2x" aria-hidden="true"></i></button>
            </div>
        );
    }
}

export default RejectButton;