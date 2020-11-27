import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
    render() {
        return(
            <div>
                <Link to="/">Home</Link>
                <Link to="/videos/new">Add New Video</Link>
            </div>
        )
    }
}


export default Navbar;