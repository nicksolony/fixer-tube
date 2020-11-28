import React, { Component } from 'react'
import Category from './Category';
import MainCategories from "./MainCategories"
import { Link } from 'react-router-dom'

// import {loadData} from "../redux/actions/videoActions"
// import { connect } from "react-redux";


const Video = (props) =>{
    const {name, description, url,brandId,category,category_id} = props.location.state.video;
    const link = `https://www.youtube.com/embed/${url}`
    console.log(props);
    return (
        <div>
            <h1>this is a site that you can find fixes on</h1>
            <MainCategories />
            <h2>{name}</h2>
    <h3><Link to={`/categories/${category_id}`}>{category}</Link></h3>
            <p align="left">{description}</p>

            <div>
            <iframe width="560" height="315" src={link}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
            </div>
        </div>
    )
}


// const mapStateToProps = (store) => store.main;

// const mapDispatchToProps = (dispatch) => {
//     return {
//         loadDataFromDb: () => dispatch(loadData())
//     }
//   }

// export default connect (mapStateToProps,mapDispatchToProps)(Video);

export default Video;