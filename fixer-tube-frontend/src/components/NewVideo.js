import React, {Component} from 'react';
import MainCategories from "./MainCategories"
import { connect } from "react-redux";
import Select from 'react-select';

class NewVideo extends Component {

    state = {
        name:'',
        description:'',
        url:'',
        brandId:null,
        categoryId:null
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value}, () => console.log(this.state))
    }

    handleBrandSelection = brand =>{
        console.log(brand);
        this.setState(
            {brandId: brand.value}
        )
    }

    handleCategorySelection = category =>{
        console.log(category);
        this.setState(
            {categoryId: category.value}
        )
    }

    
    


    render(props) {
        // const selectedBrand = this.state.brandId
        // const brands = this.props.brands;
        const brands = this.props.brands.map(brand=>({ value: brand.id, label: brand.name }));
        const categories = this.props.categories.map(category=>({ value: category.id, label: category.name }));
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
                            <tr>
                                <td><label>Brand: </label></td>
                                <td><Select 
                                    value={this.state.value}
                                    onChange={this.handleBrandSelection}
                                    options={brands}
                                /></td>
                            </tr>
                            <tr>
                                <td><label>Category: </label></td>
                                <td><Select 
                                    value={this.state.value}
                                    onChange={this.handleCategorySelection}
                                    options={categories}
                                /></td>
                            </tr>
                            <tr>
                                <td><label>YouTube URL: </label></td>
                                <td><input type="text" name="url" value= {this.state.url}  placeholder="Paste YouTube link here - https://www.youtube.com/watch?v=HYVJcq7Ika8"/></td>
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
const mapStateToProps = (store) => store.main;

export default connect(mapStateToProps)(NewVideo);