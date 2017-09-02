import React from 'react';
import PropTypes from 'prop-types'
import './Profile.css';

let Profile = (props) => {

        return (
            <div className="profile-root">
                <div className="profile-buttons">
                    <div className="profile-button-conversation text-right">
                        <i className="fa fa-comment fa-2x" aria-hidden="true"></i>
                        <i className="fa fa-ban fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="profile-photo-container text-center">
                    <img className="profile-photo"  src={props.user.photo} alt={props.user.name.first}/>
                </div>
                <div className="profile-info">
                    <h3 className="profile-name">{props.user.name.first + " " + props.user.name.last}</h3>
                    <div className="profile-age">{props.user.age}</div>
                    <div className="profile-location">{props.user.location.city + ", " + props.user.location.state}</div>
                    <div className="profile-skills">{props.user.skills.join(", ")}</div>
                    <div className="profile-bio">{props.user.bio}</div>
                </div>
            </div>
        );
}

Profile.propTypes = {
    user: PropTypes.object.isRequired
}


export default Profile;