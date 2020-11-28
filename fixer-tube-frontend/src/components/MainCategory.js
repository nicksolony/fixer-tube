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
        const brands = mainCategory.brands;
        return (
            <div>
                <h1>this is a site that you can find fixes on</h1>
                <MainCategories />
                <div class="mainCategoryListing">
                    <h1>{mainCategory.name}</h1>
                    <table align="center" margin-right="200px">
                        <thead>
                            <th width="50%"><h2>Categories</h2></th>
                            <th width="50%"><h2>Brands</h2></th>
                        </thead>
                        <tr>
                            <td align="left">{categories.map(cat=>
                                <Link to={`/categories/${cat.id}`}><h3>{cat.name}</h3></Link>
                                )}
                            </td>
                            <td aligh="right">{brands.map(brand=>
                                <Link to={`/brands/${mainCategory.id}/${brand.id}`}><h3>{brand.name}</h3></Link>
                                )}
                            </td>
                        </tr>
                        <tr>

                        </tr>
                    </table>
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

export default connect (mapStateToProps,mapDispatchToProps)(MainCategory);

