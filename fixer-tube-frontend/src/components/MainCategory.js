import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import MainCategories from "./MainCategories"



const MainCategory = (props) => {
   
    // const MainCatId = props.match.params.id;
    // console.log(MainCatId);
    // const MainCategories = props.mainCategories;
    // console.log(MainCategories);
    // if (props.mainCategories==="") {
    //     return(
    //         <div>need to load categories</div>
    //     )
    // } else {
    //     const MainCategory = props.mainCategories.find((cat)=>cat.id===props.match.params.id)
    
    //     console.log(MainCategory);
    //     return (
    //             <h1>{MainCategory.name}</h1>
    //             // <Link to={`/main_categories/${props.category.id}`}>
    //             //     <h3>{props.category.name}</h3> <br/>
    //             //     <img src={props.category.icon_src} alt={props.category.name} width="200px" height="200px"/>
    //             // </Link>
           
    //     )   
    // }
    // const MainCatId = parseInt(props.match.params.id);
    // const MainCategories = props.mainCategories;
    // debugger
    const mainCategory = props.mainCategories.find((cat)=>cat.id===parseInt(props.match.params.id,0))
    return (
        <div>
            <MainCategories />
            <h1>{mainCategory.name}</h1>
        </div>
    )

}


const mapStateToProps = (store) => store.main;

export default connect (mapStateToProps)(MainCategory);

