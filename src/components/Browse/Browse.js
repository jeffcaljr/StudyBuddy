import React, {Component} from 'react';
import BuddyCard from "../BuddyCard/BuddyCard";
import './Browse.css';
import RejectButton from "../BuddyCard/RejectButton";
import AcceptButton from "../BuddyCard/AcceptButton";

let user = {
    gender: "male",
    name: {
        "first": "Roman",
        "last": "Wilkerson"
    },
        location: {
        street: "1861 jan pieterszoon coenstraat",
        city: "Boston",
        state: "Massachusetts",
        postcode: 69217
    },
    email: "romain.hoogmoed@example.com",
    age: 34,
    photo: "https://randomuser.me/api/portraits/men/83.jpg",
    skills: [
        "Java",
        "C++",
        "Javascript",
        "Swift",
        "Android",
        "iOS",
        "NodeJS",
        "UX Design",
        "React",
        "React Native"
    ],
    bio: "New CS grad looking to study mobile development.",
    matches: [],
    preferences: [],
    conversations: []
};

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