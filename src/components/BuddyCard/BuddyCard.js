import React, {Component} from 'react';

import './BuddyCard.css';

class BuddyCard extends Component{



    render(){
        return(
            <div className="buddy-card-root">
                <div className="card">
                    <div className="card-img-top">
                        <img src={this.props.user.photo} alt={this.props.user.name.first} className="user-photo"/>
                    </div>

                    <div className="card-block">
                        <div className="buddy-card-name-container">
                            <i className="fa fa-user" aria-hidden="true"></i>
                            <span className="buddy-card-name">{this.props.user.name.first + " " + this.props.user.name.last}</span>
                        </div>
                        <div className="buddy-card-age-container">
                            <i className="fa fa-birthday-cake" aria-hidden="true"></i>
                            <span className="buddy-card-age">{this.props.user.age}</span>
                        </div>
                        <div className="buddy-card-location-container">
                            <i className="fa fa-location-arrow" aria-hidden="true"></i>
                            <span className="buddy-card-location">{this.props.user.location.city + ", " + this.props.user.location.state}</span>
                        </div>
                        <div className="buddy-card-skills-container">
                            <i className="fa fa-book" aria-hidden="true"></i>
                            <span className="buddy-card-skills">{this.props.user.skills.join(", ")}</span>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default BuddyCard;