import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import MainCategories from "./MainCategories"
import {loadData} from "../redux/actions/videoActions"
import * as R from 'ramda';
import ListItem from './ListItem';



const MainCategory = (props) => {
    
    if (props.mainCategories==="") {
        props.loadDataFromDb()
        return (
            <div>LOADING...</div>
        )
    } else {
        const mainCategory = props.mainCategories.find((cat)=>cat.slug===props.match.params.slug);
        const categories = mainCategory.categories;
        const brands = R.uniqWith(R.eqProps,mainCategory.brands);


        return (
            <div>
                <h1>this is a site that you can find fixes on</h1>
                <MainCategories />
                <div className="mainCategoryListing">
                    <h1>{mainCategory.name}</h1>
                    <table align="center" margin-right="200px">
                        <tbody>
                        <tr>
                            <td width="50%"><h2>Categories</h2></td>
                            <td width="50%"><h2>Brands</h2></td>
                        </tr>
                        <tr>
                            <td aligh="right">{categories.map(cat=>
                                <ListItem item={cat} mainCat={mainCategory} url={'/categories'} key={`category${cat.id}`}/>
                                )}
                            </td>
                            <td aligh="right">{brands.map(brand=>
                                <ListItem item={brand} mainCat={mainCategory} url={`/brands/${mainCategory.slug}`}key={`brand${brand.id}`}/>
                                )}
                            </td>
                        </tr>
                        </tbody>
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

