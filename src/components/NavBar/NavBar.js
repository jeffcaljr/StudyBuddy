import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './NavBar.css'
import UserPhoto from "./UserPhoto";
import LogoutButton from "./LogoutButton";
import {VIEWS} from "../Main/Main";
import NavLinkItem from "./NavLinkItem";

let NavBar = (props) => {
        return(
            <div className="col-md-3 col-lg-2 navbar-container">


                <div className="bootstrap-vertical-nav">




                    <button className="btn btn-primary hidden-md-up" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <span className="">Menu</span>
                    </button>

                    <div className="collapse" id="collapseExample">
                        <div className="text-right"><i className="fa fa-gear" aria-hidden="true"></i></div>

                        <UserPhoto/>

                        <ul className="nav nav-pills flex-column" id="exCollapsingNavbar3">
                            <NavLinkItem faIcon="fa-globe" active={props.activeLink === VIEWS.browse} view={VIEWS.browse} text="Browse" setView={(view) => props.setView(view)}/>
                            <NavLinkItem faIcon="fa-users" active={props.activeLink === VIEWS.matches} view={VIEWS.matches} text="Matches" setView={(view) => props.setView(view)}/>
                            <NavLinkItem faIcon="fa-comment" active={props.activeLink === VIEWS.conversations} view={VIEWS.conversations} text="Conversations" setView={(view) => props.setView(view)}/>
                        </ul>

                        <LogoutButton/>
                    </div>


                </div>



            </div>
        );
}

NavBar.propTypes = {
    activeLink: PropTypes.string.isRequired,
    setView: PropTypes.func.isRequired
}

export default NavBar;