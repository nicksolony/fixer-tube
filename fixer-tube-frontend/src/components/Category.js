import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import MainCategories from "./MainCategories"
import {loadData} from "../redux/actions/videoActions"



const Category = (props) => {
    
    if (props.mainCategories==="") {
        props.loadDataFromDb()
        return (
            <div>LOADING...</div>
        )
    } else {
        const mainCategory = props.mainCategories.find((cat)=>cat.id===parseInt(props.match.params.main_category_id,0));
        const categories = mainCategory.categories;
        const category = categories.find((category)=>category.id===parseInt(props.match.params.id,0));
        console.log(props);
        
        
        return (
            <div>
                <h1>this is a site that you can find fixes on</h1>
                <MainCategories />
                <div className="mainCategoryListing">
                    <h1>{mainCategory.name}</h1>
                    <h2>{category.name}</h2>
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

export default connect (mapStateToProps,mapDispatchToProps)(Category);

