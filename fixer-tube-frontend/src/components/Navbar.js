import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
    render() {
        return(
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/videos/new">Add New Video</NavLink>
            </div>
        )
    }
}


export default Navbar;