import React, {Component} from 'react';
import { connect } from "react-redux";
import Select from 'react-select';
import { addVideo } from "../redux/actions/videoActions";
import Header from './Header';

class NewVideo extends Component {

    state = {
        name:'',
        description:'',
        url:'',
        brandId:null,
        categoryId:null,
        errors: {
            name:"Name can't be blank!",
            url:"URL can't be blank!",
            brandId:"Brand can't be blank!",
            categoryId:"Category can't be blank!",
        }
    };

    handleChange = (e) => {
        
        // this.setState({[e.target.name]: e.target.value});

        const {name, value} = e.target;
        let errors = this.state.errors;

        switch (name) {
            
            case 'name': 
              if (value==='') {
                  errors.name = "Name can't be blank!"
              } else if (this.props.videos.find(video=>video.name===value)) {
                errors.name = "Video with this name exist!"
              } else {
                errors.name = ''
              }
              break;
            case 'url': 
              if (value==='') {
                  errors.url = "URL can't be blank!"
              } else if (this.props.videos.find(video=>video.url===value)) {
                errors.url = "Video with this url exist!"
              } else {
                errors.url = ''
              }
              break;
            default:
              break;
          }
        
          this.setState({errors, [name]: value}, ()=> {
              console.log(errors, this.state)
          })
        
        
    };

    handleBrandSelection = (brand) =>{ 
        let errors = this.state.errors;
        if (!!brand.value) {
            errors.brandId=""  
        } else {
            errors.brandId="Brand can't be blank!"
        } 
        this.setState({errors, brandId: brand.value})
        console.log(this.state);
    };

    handleCategorySelection = (category) =>{
        this.setState(
            {categoryId: category.value}
        )
    };

    createNewVideo = (video) => {
        const newVideo = {
            "name": video.name,
            "description": video.description,
            "url":video.url,
            "brand_id":video.brandId,
            "category_id":video.categoryId
        }
        
        this.props.addVideo(newVideo,this.props.history)
        
        this.setState({
            name:'',
            description:'',
            url:'',
            brandId:null,
            categoryId:null
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        
        if (this.state.name === '' || !!this.props.videos.find(video=>video.name===this.state.name) || this.state.url === '' || !!this.props.videos.find(video=>video.url===this.state.url)) {
            console.log("Name can't be blank");
        } else {
            this.createNewVideo(this.state)
        }
    };
    


    render(props) {
        const brands = this.props.brands.map(brand=>({ value: brand.id, label: brand.name }));
        const categories = this.props.categories.map(category=>({ value: category.id, label: category.name }));
        return(
            <div>
                <Header/>
                <div className="mainCategoryListing"> 
                    <h2>Add new video here:</h2>
                    <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
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
const mapDispatchToProps = (dispatch) => {
    return {
        addVideo: (newVideo,history) => dispatch(addVideo(newVideo,history))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(NewVideo);