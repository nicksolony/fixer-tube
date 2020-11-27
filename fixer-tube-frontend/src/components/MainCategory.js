import React from 'react';
import {Link} from 'react-router-dom';


const MainCategory = (props) => {
    console.log(props);
    return (
       
            <Link to={`/main_categories/${props.category.id}`} key={props.category.id}><h3>{props.category.name}</h3></Link>
       
    )
}

export default MainCategory;