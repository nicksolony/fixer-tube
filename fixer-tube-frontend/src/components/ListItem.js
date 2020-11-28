import React from 'react';
import {Link} from 'react-router-dom';



const ListItem = (props) => {
    return (
        
    <Link to={`${props.url}${props.mainCat}/${props.item.id}`}><h3>{props.item.name}</h3></Link>
    )
}
       

export default ListItem;

