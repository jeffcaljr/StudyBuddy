import React, {Component} from 'react';
import './Content.css'
import logo from "../../sb_logo.png";
import Browse from "../Browse/Browse";
import PropTypes from 'prop-types'
import {VIEWS} from "../Main/Main";
import RouterError from "../RouterError";
import Matches from "../Matches/Matches";
import user from '../../models/User'
import Conversations from "../Conversations/Conversations";

let Content = (props) => {


    let renderedComponent;


    switch(props.view){
        case VIEWS.browse:
            renderedComponent = <Browse/>
            break;
        case VIEWS.conversations:
            renderedComponent = <Conversations/>
            break;
        case VIEWS.matches:
            renderedComponent = <Matches user={user}/>
            break;
        default:
            renderedComponent = <RouterError/>

    }

        return(
            <div className="col-md-9 col-lg-10 content-container">
                <div className="logo-container text-center">
                    <img className="logo" src={logo} alt="StudyBuddy"/>
                </div>
                {renderedComponent}
            </div>
        );
}

Content.propTypes = {
    view: PropTypes.string.isRequired
}

export default Content;