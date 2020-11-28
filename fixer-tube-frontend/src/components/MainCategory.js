import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import MainCategories from "./MainCategories"
import {loadData} from "../redux/actions/videoActions"
import * as R from 'ramda';



const MainCategory = (props) => {
    
    if (props.mainCategories==="") {
        props.loadDataFromDb()
        return (
            <div>LOADING...</div>
        )
    } else {
        const mainCategory = props.mainCategories.find((cat)=>cat.id===parseInt(props.match.params.id,0));
        const categories = mainCategory.categories;
        const brands = R.uniqWith(R.eqProps,mainCategory.brands);


        return (
            <div>
                <h1>this is a site that you can find fixes on</h1>
                <MainCategories />
                <div className="mainCategoryListing">
                    <h1>{mainCategory.name}</h1>
                    <table align="center" margin-right="200px">
                        <thead>
                            <td width="50%"><h2>Categories</h2></td>
                            <td width="50%"><h2>Brands</h2></td>
                        </thead>
                        <tr>
                            <td align="left">{categories.map(cat=>
                                <Link to={`/categories/${mainCategory.id}/${cat.id}`}><h3>{cat.name}</h3></Link>
                                )}
                            </td>
                            <td aligh="right">{brands.map(brand=>
                                <Link to={`/brands/${mainCategory.id}/${brand.id}`}><h3>{brand.name}</h3></Link>
                                )}
                            </td>
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
        loadDataFromDb: () => dispatch(loadData())
    }
  }

export default connect (mapStateToProps,mapDispatchToProps)(MainCategory);

