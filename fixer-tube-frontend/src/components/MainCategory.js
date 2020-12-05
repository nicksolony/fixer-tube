import React from 'react';
import { connect } from "react-redux";
import {loadData} from "../redux/actions/videoActions"
import ListItem from './ListItem';
import Header from './Header';



const MainCategory = (props) => {
    
    if (props.mainCategories==="") {
        props.loadDataFromDb()
        return (
            <div>LOADING...</div>
        )
    } else {
        const mainCategory = props.mainCategories.find((cat)=>cat.slug===props.match.params.slug);
        const categories = props.categories.filter(category=>category.main_category_id === mainCategory.id);
        // const brands = mainCategory.brands.filter((obj, pos, arr) => {
        //     return arr.map(mapObj => mapObj['id']).indexOf(obj['id']) === pos;
        // });

        const videos = []
        categories.map(category=> videos.push(props.videos.filter(video=>video.category_id ===category.id)))
        const brandIds = videos.flat(2).map(vid=>{return vid.brand_id})
        const brands = props.brands.filter(brand=>brandIds.includes(brand.id))


        return (
            <div>
               < Header/>
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
                                <ListItem item={brand} mainCat={mainCategory} url={`/mainCategory/${mainCategory.slug}`}key={`brand${brand.id}`}/>
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

