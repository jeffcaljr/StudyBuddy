import React, {Component} from 'react';
import './Matches.css';

class Matches extends Component{

    renderMatch(user){
        return(
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 match-container">
                <div className="match-photo text-center">
                    <img src={user.photo} alt={user.name.first} className="match-photo rounded-circle"/>
                </div>
                <div className="match-name text-center">{user.name.first}</div>
            </div>
        );
    }

    render(){

        let matches = [];

        for(var i = 0; i < 20; i++){
            matches.push(this.renderMatch(this.props.user));
        }

        return(
            <div className="matches-root row">
                {matches}
            </div>
        );
    }
}

export default Matches;
