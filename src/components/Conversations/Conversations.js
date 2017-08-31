import React from 'react'
import PropTypes from 'prop-types'
import Conversation from '../Conversations/Conversation'


let Conversations = (props) => {
    
    return(
        <div className="conversations-container">
            <Conversation conversation="{{}}"></Conversation>
            <Conversation conversation="{{}}"></Conversation>
            <Conversation conversation="{{}}"></Conversation>
            <Conversation conversation="{{}}"></Conversation>
            <Conversation conversation="{{}}"></Conversation>
        </div>
    );
}

export default Conversations;