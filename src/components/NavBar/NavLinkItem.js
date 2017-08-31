import React from 'react'
import PropTypes from 'prop-types'

let NavLinkItem = (props) => {

    return(
        <li className="nav-item">
            <a
                className={ (props.active) ? "text-white nav-link active " : "text-white nav-link "}
                href="#"
                onClick={(ev) => {props.setView(props.view)}}>

                <i className={'fa ' + props.faIcon} aria-hidden="true"></i> {props.text}</a>
        </li>
    );
}

NavLinkItem.propTypes = {
    faIcon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    view: PropTypes.string.isRequired,
    setView: PropTypes.func.isRequired


}

export default NavLinkItem