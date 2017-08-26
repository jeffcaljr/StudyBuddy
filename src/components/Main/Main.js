import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import Content from '../Content/Content';
import './Main.css';

class Main extends  Component{
    render(){
        return(
            <div className="root">
                <div className="row">
                    <NavBar/>
                    <Content/>
                </div>
            </div>
        );
    }
}

export default Main