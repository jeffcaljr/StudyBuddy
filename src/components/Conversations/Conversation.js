import React from 'react'
import PropTypes from 'prop-types'
import '../App/App.css'


let Conversation = (props) => {
    return (
        <div className="conversation-container container-fluid">
            <div className="row">
                <div className="col-sm-2">
                    <div className="conversation-image">
                        <img src="https://randomuser.me/api/portraits/men/83.jpg" alt="image" className="img img-fluid rounded-circle"/>
                    </div>
                </div>
                <div className="col-sm-8">
                    <span className="text-center">Last message was a sample message.</span>
                </div>
                <div className="col-sm-2">
                    <p className="text-center">{new Date().toLocaleTimeString()}</p>
                </div>
            </div>
        </div>
    );
}

Conversation.propTypes = {
    conversation: PropTypes.object.isRequired
}

export default Conversation