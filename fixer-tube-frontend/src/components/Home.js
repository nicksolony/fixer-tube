import React, {Component} from 'react';
import { connect } from "react-redux";
import MainCategories from './MainCategories';


class Home extends Component {
    render() {
        return(
            <div>
                <h1>this is a site that you can find fixes on</h1>
               < MainCategories />
            </div>
        )
    }
}

export default Home;