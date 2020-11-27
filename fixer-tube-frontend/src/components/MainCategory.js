import React from 'react';
import {Link} from 'react-router-dom';



const MainCategory = (props) => {
    return (
       
            <Link to={`/main_categories/${props.category.id}`}>
                <h3>{props.category.name}</h3> <br/>
                <img src={props.category.icon_src} alt={props.category.name} width="200px" height="200px"/>
            </Link>
       
    )
}

export default MainCategory;

