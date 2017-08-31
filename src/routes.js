import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import Login from "./components/Login/Login";
import RegistrationBox from "./components/Registration/Registration";
import Main from './components/Main/Main';
import RouterError from "./components/RouterError";
import MainRouter from "./components/Main/MainRouter";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={MainRouter}></Route>
            <Route path="/register" component={RegistrationBox}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/main" component={Main}></Route>
        <Route path="/editProfile" component={Login}/>
        <Route path="*" component={RouterError}></Route>
    </Switch>
);



export default Routes;