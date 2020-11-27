import React, {Component} from 'react';
import { connect } from "react-redux";

class NewVideo extends Component {
    render() {
        return(
            <div>
                <form>
                    <label>New Video Name</label>
                    <input type="text" name="name" placeholder="type name here"></input>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default NewVideo;