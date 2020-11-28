import React, { Component } from 'react'
import Category from './Category';
import MainCategories from "./MainCategories"
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

// import {loadData} from "../redux/actions/videoActions"
// import { connect } from "react-redux";


const Video = (props) =>{
    
    const {name, description, url,brand_id,category_id} = props.videos.find(video=>video.id===parseInt(props.match.params.id,0));
    const link = `https://www.youtube.com/embed/${url}`
    const brand=props.brands.find((brand)=>brand.id===brand_id)
    const category=props.categories.find((category)=>category.id===category_id)
    
    return (
        <div>
            <h1>this is a site that you can find fixes on</h1>
            <MainCategories />
            <h2>{name}</h2>
            <h3><Link to={`/categories/${category_id}`}>{category.name}</Link></h3>
            <h3>{brand.name}</h3>
            <p align="left">{description}</p>

            <div>
            <iframe width="560" height="315" src={link}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>
            </div>
        </div>
    )
}


const mapStateToProps = (store) => store.main;

// const mapDispatchToProps = (dispatch) => {
//     return {
//         loadDataFromDb: () => dispatch(loadData())
//     }
//   }

export default connect (mapStateToProps)(Video);
// export default connect (mapStateToProps,mapDispatchToProps)(Video);

// export default Video;