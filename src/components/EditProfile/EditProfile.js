import React, {Component} from 'react'
import PropTypes from 'prop-types';

class EditProfile extends Component{
    constructor(){
        super();
        this.toggleEditable = this.toggleEditable.bind(this)
        this.isDisabled = this.isDisabled.bind(this)
        this.state = {
            editable: false
        }

    }

    propTypes = {
        user: PropTypes.object.isRequired
    }

    toggleEditable = () => {
        this.setState({editable: ! this.state.editable})
    }

    isDisabled = () => {
        return this.state.editable ? "" : "disabled"
    }

    render(){
        return(
            <div className="edit-profile-container container-fluid">
                <h1>Edit Profile</h1>

                <button 
                    className="btn btn-danger"
                    onClick={() => this.toggleEditable()}>

                        <i aria-hidden="true" className="fa fa-pencil"></i>
                    Make Changes
                </button>

                <fieldset disabled={this.isDisabled()}>
                <form action="" method="post" accept-charset="utf-8" enctype="multipart/form-data">

                <fieldset className="form-group">
                    <div className="photo-container">
                        <img className="img rounded-circle" src={this.props.user.photo} alt={this.props.user.name.first} />
                    </div>
                        <label for="profilePicture">Profile Picture</label>
                        <input 
                            className="form-control-file" 
                            type="file" name="profilePicture" 
                            placeholder="Upload profile picture" 
                            required 
                            multiple 
                            />
                    </fieldset>


                    <fieldset className="form-group">
                        <label for="name">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" name="name" 
                            required 
                            placeholder="John Doe" 
                            
                            value={this.props.user.name.first + " " + this.props.user.name.last}/>
                    </fieldset>


                    <fieldset className="form-group">
                        <label for="location">Location</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="location" 
                            name="location" 
                            required 
                            placeholder="City, State" 
                            
                            value={this.props.user.location.city + ", " + this.props.user.location.state}/>
                    </fieldset>


                    <fieldset className="form-group">
                        <label for="age">Age</label>
                        <input 
                            type="number" 
                            min="13" 
                            max="120" 
                            value="18" 
                            className="form-control" 
                            id="age" 
                            name="age" 
                            required 
                            
                            value={this.props.user.age}/>
                    </fieldset>

                    <fieldset className="form-group">
                        <label for="gender">Gender</label>
                        <select id="gender" className="form-control"  name="gender" >
                            <option selected={this.props.user.gender === "Male" ? "selected" : ""} value="Male">Male</option>
                            <option selected={this.props.user.gender === "Female" ? "selected" : ""} value="Female">Female</option>
                        </select>
                    </fieldset>

                    <fieldset className="form-group">
                        <label for="bio">Bio</label>
                        <textarea 
                            name="bio" 
                            id="bio" 
                            required 
                            className="form-control" 
                            maxlength="250" 
                            placeholder="Post a short description about yourself (250 characters or less)" 
                            
                            value={this.props.user.bio}></textarea>
                    </fieldset>

                    <fieldset className="form-group">
                        <label for="skills">Skills</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="skills" name="skills" 
                        required 
                        placeholder="English, French, etc/" 
                        
                        value={this.props.user.skills.join(", ")}/>
                    </fieldset>

                    <input className="btn btn-success" type="submit" name="submit" value="Save" />
                </form>
                </fieldset>

                
            </div>
        );
    }
}

export default EditProfile;