import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import MainCategories from "./MainCategories"
import {loadMainCategories} from "../redux/actions/videoActions"



const Brand = (props) => {
    
    if (props.mainCategories==="") {
        props.loadMainCategoriesFromDb()
        return (
            <div>LOADING...</div>
        )
    } else {
        const mainCategory = props.mainCategories.find((cat)=>cat.id===parseInt(props.match.params.id,0));
        const brands = mainCategory.brands;
        return (
            <div>
                <MainCategories />
                <h1>{mainCategory.name}</h1>
                
                    {brands.map(brand=><h3>{brand.name}</h3>)}
                
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

export default connect (mapStateToProps,mapDispatchToProps)(Brand);

