import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import {loadData} from "../redux/actions/videoActions"
import Header from './Header';


class Video extends Component {
    
    handleEdit = () =>{
        this.props.history.push(`/videos/${this.props.match.params.slug}/edit`);
    }

    handleDelete = () =>{
        console.log(`delete - ${this.props.match.params.slug}`)
    }
    
    
    render() {
    
    if (this.props.mainCategories==="") {
        this.props.loadDataFromDb()
        return (
            <div>LOADING...</div>
        )
    } else {

        const {name, description, url,brand_id,category_id} = this.props.videos.find(video=>video.slug===this.props.match.params.slug);
        const shortUrl = url.split("https://www.youtube.com/watch?v=")[1]
        const link = `https://www.youtube.com/embed/${shortUrl}`
        const brand=this.props.brands.find((brand)=>brand.id===brand_id)
        const category=this.props.categories.find((category) =>category.id===category_id)
        
        return (
            <div>
                <Header/>
                <h2>
                    {name} 
                    <input type="submit" value="✏️" onClick={this.handleEdit}/>
                    <input type="submit" value="🗑️" onClick={this.handleDelete}/>
                </h2>
                <h3><Link to={`/categories/${category.slug}`}>  {category.name}</Link> - <Link to={`/brands/${brand.slug}`}>{brand.name}</Link></h3>
                <p>{description}</p>
                <div>
                    <iframe title={name} width="560" height="315"   src={link}  frameBorder="0"   allow="accelerometer; autoplay;   clipboard-write; encrypted-media; gyroscope;  picture-in-picture"  allowFullScreen="allowFullScreen"></iframe>
                </div>
                
            </div>
        )
    }
}   
}

const mapStateToProps = (store) => store.main;

const mapDispatchToProps = (dispatch) => {
    return {
        loadDataFromDb: () => dispatch(loadData())
    }
  }


export default connect (mapStateToProps,mapDispatchToProps)(Video);