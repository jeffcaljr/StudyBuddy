import React, {Component} from 'react';
import './Profile.css';

class Profile extends Component{
    render(){

        return (
            <div className="profile-root">
                <div className="profile-buttons">
                    <div className="profile-button-conversation text-right">
                        <i className="fa fa-comment fa-2x" aria-hidden="true"></i>
                        <i className="fa fa-ban fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="profile-photo-container text-center">
                    <img className="profile-photo"  src={this.props.user.photo} alt={this.props.user.name.first}/>
                </div>
                <div className="profile-info">
                    <h3 className="profile-name">{this.props.user.name.first + " " + this.props.user.name.last}</h3>
                    <div className="profile-age">{this.props.user.age}</div>
                    <div className="profile-location">{this.props.user.location.city + ", " + this.props.user.location.state}</div>
                    <div className="profile-skills">{this.props.user.skills.join(", ")}</div>
                    <div className="profile-bio">{this.props.user.bio}</div>
                </div>
            </div>
        );
    }
}


export default Profile;