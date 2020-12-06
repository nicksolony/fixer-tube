import React, {Component} from 'react';
import MainCategories from './MainCategories';
import Navbar from './Navbar';



class Header extends Component {
    render() {
        return(
            <div>
                <h1>Logo will be here</h1>
                <Navbar />
               < MainCategories />
            </div>
        )
    }
}

export default Header;