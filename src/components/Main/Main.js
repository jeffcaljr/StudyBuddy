import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import Content from '../Content/Content';
import './Main.css';

export const VIEWS = {
    browse: 'browse',
    matches: 'matches',
    conversations: 'conversations',
    profile: 'profile',
    editProfile: 'editProfile'

}

class Main extends  Component{



    constructor(){
        super()
        this.state = {
            currentView: VIEWS.browse
        }

        this.setView = this.setView.bind(this)
    }

    setView(view){
        this.setState({
            currentView: view
        })
    }

    render(){
        return(
            <div className="root">
                <div className="row">
                    <NavBar
                        activeLink={this.state.currentView}
                        setView={(view) => this.setView(view)}/>
                    <Content view={this.state.currentView}/>
                </div>
            </div>
        );
    }
}

export default Main