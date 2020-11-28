import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import MainCategories from "./MainCategories"
import {loadData} from "../redux/actions/videoActions"



const Brand = (props) => {
    
    if (props.mainCategories==="") {
        props.loadDataFromDb()
        return (
            <div>LOADING...</div>
        )
    } else {
        const mainCategory = props.mainCategories.find((cat)=>cat.id===parseInt(props.match.params.main_category_id,0));
        const brands = mainCategory.brands;
        const brand = brands.find((brand)=>brand.id===parseInt(props.match.params.id,0));
        const videos = mainCategory.videos.filter(video=>video.brand_id===brand.id).sort(comprare)
        const categories = props.categories;
        // const categories = mainCategory.categories;
        // const allCategories = props.categories
        // const videosWithCategory = videos.map((video)=>video={...video, categoryName:categories.find(cat=>cat.id===video.category_id).name}).sort(comprare)

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
                <h1>this is a site that you can find fixes on</h1>
                <MainCategories />
                <div className="mainCategoryListing">
                    <h1>{mainCategory.name} - {brand.name}</h1>
                    <h2>Videos</h2>
                    <ul>
                        {videos.map(video=>
                          
                           <Link to={`/videos/${video.id}`}>

                                <li>{categories.find((category)=>category.id===video.category_id).name} - {video.name}</li>
                            </Link>
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

export default connect (mapStateToProps,mapDispatchToProps)(Brand);

