import React, {Component} from 'react';
import Header from './Header';
import SlideShow from './SlideShow';


class Home extends Component {
    render() {
        return(
            <div>
                <Header/>
               < SlideShow className="SlideShow"/>
            </div>
        )
    }
}

export default Home;