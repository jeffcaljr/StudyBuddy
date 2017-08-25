import React, {Component} from 'react';

class NavBar extends Component{
    render(){
        return(
            <div className="col-md-3 col-lg-2 col-xl-1">

                <div className="bootstrap-vertical-nav">

                    <button className="btn btn-primary hidden-md-up" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <span className="">Menu</span>
                    </button>

                    <div className="collapse" id="collapseExample">
                        <ul className="nav flex-column" id="exCollapsingNavbar3">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Active</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}


export default NavBar;