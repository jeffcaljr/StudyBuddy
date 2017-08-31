import React, {Component} from 'react';
import './Browse.css';
import RejectButton from "../BuddyCard/RejectButton";
import AcceptButton from "../BuddyCard/AcceptButton";
import user from '../../models/User'
import BuddyCard from '../BuddyCard/BuddyCard'

class Browse extends Component{


    render(){
        return (
            <div className="browse-root">
                <BuddyCard user={user}/>

                <div className="discover-card-buttons text-center">
                    <RejectButton/>
                    <AcceptButton/>
                </div>
            </div>


        );
    }
}

export default Browse;