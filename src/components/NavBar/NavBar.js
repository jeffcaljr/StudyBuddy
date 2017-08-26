import React, {Component} from 'react';

import './NavBar.css'
import UserPhoto from "./UserPhoto";
import LogoutButton from "./LogoutButton";

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



export default NavBar;