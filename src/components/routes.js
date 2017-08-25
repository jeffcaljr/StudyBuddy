import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import Registration from "./Login/Login";

const Routes = () => (
    <Switch>
            <Route exact path="/" component={Registration}></Route>
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