import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from "./Login/Login";
import RegistrationBox from "./Registration/Registration";
import Main from './Main/Main';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={MainRouter}></Route>
        <Route path="/register" component={RegistrationBox}></Route>
        <Route path="/main" component={Main}></Route>
        <Route path="/editProfile" component={Login}/>
        <Route path="*" component={RouterError}></Route>
    </Switch>
);


class RouterError extends Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>404 Error</h1>
            </div>
        );
    }
}

export default Routes;