import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from "./Main";


class MainRouter extends Component{
    render(){
        return(
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        );
    }
}

export default  MainRouter;