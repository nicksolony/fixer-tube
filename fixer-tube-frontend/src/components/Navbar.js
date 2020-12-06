import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Search from './Search';

const Navbar = () => {


    
        return(
            <div className='NavBar'>
                <p>
                <Link to="/">Home</Link>
                <span> | </span>
                <Link to="/videos/new">Add Video</Link>
                <span> | </span>
                <Search />        
                </p>
            </div>
        )
    }



export default Navbar;