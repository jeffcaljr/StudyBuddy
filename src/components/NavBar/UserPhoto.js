import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import user from '../../models/User'

let UserPhoto = (props) =>{

        return(
            <div className="user-photo-container">
                <figure >
                    <div className="user-photo text-center">
                        <img src={user.photo} alt={user.name.first}className="user-photo-image img-fluid figure-img rounded-circle"/>
                    </div>
                    <div className="text-center text-white edit-profile-link-text">
                        <i 
                        className="fa fa-pencil"
                        aria-hidden="true"></i>

                        <a 
                            className="text-white"
                            href="#"
                            onClick={(ev) => {props.setView(props.view)}}>

                            Edit Profile
                        </a>
                    </div>
                    <figcaption className="user-photo-greeting figure-caption text-center text-white">{"Welcome, " + user.name.first + "!"}</figcaption>
                </figure>
            </div>
        );
}

UserPhoto.propTypes = {
    view: PropTypes.string.isRequired,
    setView: PropTypes.func.isRequired
}


export default  UserPhoto;