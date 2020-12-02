import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
    render() {
        return(
            <div className='NavBar'>
                <p>
                <Link to="/">Home</Link>
                <span> | </span>         
                <Link to="/videos/new">Add Video</Link>
                </p>
            </div>
        )
    }
}


export default Navbar;