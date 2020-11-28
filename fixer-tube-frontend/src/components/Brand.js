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
        const mainCategory = props.mainCategories.find((cat)=>cat.id===parseInt(props.match.params.main_category_id,0));
        const brands = mainCategory.brands;
        const brand = brands.find((brand)=>brand.id===parseInt(props.match.params.id,0));
        console.log(props);
        
        
        return (
            <div>
                <h1>this is a site that you can find fixes on</h1>
                <MainCategories />
                <div className="mainCategoryListing">
                    <h1>{mainCategory.name} - {brand.name}</h1>
                    <h2>Categories</h2>
                    
                            {/* <td align="left">{categories.map(cat=>
                                <Link to={`/categories/${mainCategory.id}/${cat.id}`}><h3>{cat.name}</h3></Link>
                                )}
                            </td>
                            <td aligh="right">{brands.map(brand=>
                                <Link to={`/brands/${mainCategory.id}/${brand.id}`}><h3>{brand.name}</h3></Link>
                                )}
                            </td> */}
                     
                </div>
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

