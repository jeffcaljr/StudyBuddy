import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import Content from '../Content/Content';

class Main extends  Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <NavBar/>
                    <Content/>
                </div>
            </div>
        );
    }
}

export default Main