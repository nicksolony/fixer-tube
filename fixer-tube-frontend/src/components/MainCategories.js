import React, {Component} from 'react';
import { connect } from "react-redux";
import {loadMainCategories} from "../redux/actions/videoActions"


class MainCategories extends Component {
    
    componentDidMount() {
        this.props.loadMainCategoriesFromDb()
    }

    render() {
        if (this.props.video.mainCategories==="") {
            return (
                <div>LOADING...</div>
            )
        } else {
            const rowSize=this.props.video.mainCategories.length/2
            const row1 = this.props.video.mainCategories.slice(0,rowSize)
            const row2 = this.props.video.mainCategories.slice(rowSize,this.props.video.mainCategories.length)
            return(
                <div >
                   <table className="MainCategories">
                       <tbody>
                            <tr>
                                {row1.map((cat) => (<td>{cat.name}</td>))}
                            </tr>
                            <tr>
                                {row2.map((cat) => (<td>{cat.name}</td>))}
                         </tr>
                        </tbody>
                   </table>
                </div>
            )   
        }
    }
}

const mapStateToProps = (store) => store;

const mapDispatchToProps = (dispatch) => {
    return {
        loadMainCategoriesFromDb: () => dispatch(loadMainCategories())
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(MainCategories);