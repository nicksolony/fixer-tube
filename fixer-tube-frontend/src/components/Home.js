import React, {Component} from 'react';
import { connect } from "react-redux";
import MainCategories from './MainCategories';
import SlideShow from './SlideShow';


class Home extends Component {
    render() {
        return(
            <div>
                <h1>this is a site that you can find fixes on</h1>
               < MainCategories />
               < SlideShow className="SlideShow"/>
            </div>
        )
    }
}

export default Home;