import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

class NavBar extends Component{
    render(){
        return(
            <div className="col-md-3 col-lg-2 navbar-container">


                <div className="bootstrap-vertical-nav">
                    <div className="text-right"><i className="fa fa-gear" aria-hidden="true"></i></div>

                    <UserPhoto/>

                    <button className="btn btn-primary hidden-md-up" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <span className="">Menu</span>
                    </button>

                    <div className="collapse" id="collapseExample">
                        <ul className="nav nav-pills flex-column" id="exCollapsingNavbar3">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <i className="fa fa-globe" aria-hidden="true"></i> Browse</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    <i className="fa fa-users" aria-hidden="true"></i>Matches</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">
                                    <i className="fa fa-comment" aria-hidden="true"></i>Conversations</a>
                            </li>
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link text-white" href="#">*/}
                                    {/*<i className="fa fa-gear" aria-hidden="true"></i>Disabled</a>*/}
                            {/*</li>*/}
                        </ul>
                        <LogoutButton/>
                    </div>


                </div>



            </div>
        );
    }
}

class LogoutButton extends Component{
    render(){
        return(
            <div className="logout-button-container">
                <button className="btn btn-danger text-white">Logout</button>
            </div>
        );
    }
}

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


export default NavBar;