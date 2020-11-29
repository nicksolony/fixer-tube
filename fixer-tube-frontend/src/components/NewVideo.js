import React, {Component} from 'react';
import MainCategories from "./MainCategories"
import { connect } from "react-redux";

class NewVideo extends Component {

    state = {
        name:'',
        description:'',
        url:'',
        brandId:'',
        categoryId:''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value}, () => console.log(this.state))
    }

    render(props) {
        return(
            <div>
                <h1>this is a site that you can find fixes on</h1>
                <MainCategories />
                <div className="mainCategoryListing"> 
                    <h2>Add new video here:</h2>
                    <form onChange={this.handleChange}>
                        <table>
                            <tbody>
                            <tr>
                                <td><label>Video Name: </   label></td>
                                <td><input type="text" name="name" value= {this.state.name}  placeholder="Type name of your video here"/></td>
                            </tr>
                            <tr>
                                <td><label>Video Description: </label></td>
                                <td><textarea name="description" value= {this.state.description}  placeholder="Type description of your video here"/></td>
                            </tr>
                            <tr><td><input type="submit"/></td></tr>
                            </tbody>
                        </table>   
                    </form>
                </div>
            </div>
        )
    }
}

export default NewVideo;