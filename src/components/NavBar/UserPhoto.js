import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserPhoto extends Component{

    user = {
        photo: "https://randomuser.me/api/portraits/men/83.jpg",
        name: "Ramon"
    }

    render(){

        return(
            <div className="user-photo-container">
                <figure >
                    <div className="user-photo text-center">
                        <img src={this.user.photo} alt={this.user.name}className="user-photo-image img-fluid figure-img rounded-circle"/>
                    </div>
                    <Link to="/editProfile"><div className="text-center text-white edit-profile-link-text"><i className="fa fa-pencil" aria-hidden="true"></i>Edit Profile</div></Link>
                    <figcaption className="user-photo-greeting figure-caption text-center text-white">{"Welcome, " + this.user.name + "!"}</figcaption>
                </figure>
            </div>
        );
    }
}


export default  UserPhoto;