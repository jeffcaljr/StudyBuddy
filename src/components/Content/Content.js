import React, {Component} from 'react';
import './Content.css'
import logo from "../../sb_logo.png";

class Content extends Component{
    render(){
        return(
            <div className="col-md-9 col-lg-10 content-container">
                <div className="logo-container text-center">
                    <img className="logo" src={logo} alt="StudyBuddy"/>
                </div>
                <h1>Bootstrap 4.0 Vertical Nav Example</h1>

                <hr />

                <div className="jumbotron">
                    <h3>Using 4.0 Responsive Navbar</h3>
                    <p>A simple example using the 4.0 Responsive Navbar to create a vertical menu that will switch to a mobile, collapsible menu.</p>
                    <p><a href="https://www.jonathanbriehl.com/2015/12/15/bootstrap-4-vertical-menu/" target="_blank">The blog article for this example can be found here</a>.</p>
                </div>

                <hr />

                <p>Nullam congue, dui luctus aliquam maximus, erat magna posuere purus, posuere elementum urna nisi vitae dolor. Integer tristique non velit ut suscipit. Vestibulum quam eros, blandit dapibus iaculis nec, volutpat vel purus. Quisque commodo euismod ipsum, quis pulvinar augue. Cras non fermentum velit. Proin tincidunt lectus diam, at ornare augue interdum eget. Vivamus porttitor iaculis urna in porttitor. Maecenas auctor ac augue convallis eleifend. Praesent lacus odio, placerat sed felis ac, vulputate auctor quam. Cras in nulla eu libero cursus cursus ut a enim. Praesent varius viverra maximus. Morbi accumsan, orci quis semper tempus, leo ipsum efficitur ipsum, eu fermentum ipsum est ac nibh. Ut ut venenatis eros. Duis neque nulla, malesuada non ultrices non, laoreet nec enim. Mauris congue, ipsum non ultrices congue, leo eros tristique urna, bibendum accumsan ligula sem in justo.</p>
            </div>
        );
    }
}

export default Content;