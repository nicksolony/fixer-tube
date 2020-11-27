import React, {Component} from 'react';
import { connect } from "react-redux";
import {loadMainCategories} from "../redux/actions/videoActions"


class MainCategories extends Component {
    
    componentDidMount() {
        this.props.loadMainCategoriesFromDb()
    }

    render() {
        return(
            <div >
               <table className="MainCategories">
                   <tbody>
                        <tr>
                            <td>Category 1</td>
                            <td>Category 2</td>
                            <td>Category 3</td>
                        </tr>
                        <tr>
                            <td>Category 4</td>
                            <td>Category 5</td>
                            <td>Category 6</td>
                     </tr>
                    </tbody>
               </table>
            </div>
        )
    }
}

const mapStateToProps = (store) => store;

const mapDispatchToProps = (dispatch) => {
    return {
        loadMainCategoriesFromDb: () => dispatch(loadMainCategories())
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(MainCategories);