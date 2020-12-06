import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {loadData} from "../redux/actions/videoActions"
import Header from "./Header"


const SearchResults = (props) => {
    
    if (props.mainCategories==="") {
        props.loadDataFromDb()
        return (
            <div>LOADING...</div>
        )
    } else {
        const brands = props.brands;
        const categories = props.categories
        const videos = props.videos.filter(video=>
            (video.name+", "+video.description+", " + brands.find(brand=>brand.id===video.brand_id).name+", "+categories.find(category=>category.id===video.category_id).name).toUpperCase().includes(props.match.params.searchValue.toUpperCase())
            ).sort(comprare)
        
        
        

        function comprare(a, b) {
            const videoA = a.name.toUpperCase();
            const videoB = b.name.toUpperCase();
          
            let comparison = 0;
            if (videoA > videoB) {
              comparison = 1;
            } else if (videoA < videoB) {
              comparison = -1;
            }
            return comparison;
          }
        return (
            <div>
                <Header/>
                <div className="mainCategoryListing">
                    <h1>Search resulst for: {props.match.params.searchValue}</h1>
                    <ul>
                        {videos.map(video=>
                           
                           <li key={`video-${video.id}`}>
                               <Link to={`/brands/${brands.find(brand=>brand.id===video.brand_id).slug}`}>{brands.find(brand=>brand.id===video.brand_id).name}</Link> - 
                               <Link to={`/categories/${categories.find(category=>category.id===video.category_id).slug}`}> {categories.find(category=>category.id===video.category_id).name}</Link> - 
                               <Link to={`/videos/${video.slug}`}> {video.name}</Link>
                            </li>
                            
                        )}
                    </ul>
                        
                     
                </div>
            </div>
        )
    }
}



const mapStateToProps = (store) => store.main;

const mapDispatchToProps = (dispatch) => {
    return {
        loadDataFromDb: () => dispatch(loadData())
    }
  }

export default connect (mapStateToProps, mapDispatchToProps)(SearchResults);

