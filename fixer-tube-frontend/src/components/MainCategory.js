import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import MainCategories from "./MainCategories"
import {loadMainCategories} from "../redux/actions/videoActions"



const MainCategory = (props) => {
    
    if (props.mainCategories==="") {
        props.loadMainCategoriesFromDb()
        return (
            <div>LOADING...</div>
        )
    } else {
        const mainCategory = props.mainCategories.find((cat)=>cat.id===parseInt(props.match.params.id,0));
        const categories = mainCategory.categories;
        return (
            <div>
                <MainCategories />
                <h1>{mainCategory.name}</h1>
                
                    {categories.map(cat=><h3>{cat.name}</h3>)}
                
            </div>
        )
    }
}



const mapStateToProps = (store) => store.main;

const mapDispatchToProps = (dispatch) => {
    return {
        loadMainCategoriesFromDb: () => dispatch(loadMainCategories())
    }
  }

export default connect (mapStateToProps,mapDispatchToProps)(MainCategory);

