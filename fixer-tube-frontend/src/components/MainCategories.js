import React, {Component} from "react";
import { connect } from "react-redux";
import MainCategoryBtn from "./MainCategoryBtn"



class MainCategories extends Component {

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
                                {row1.map((cat) => <td className='mainCategory'><MainCategoryBtn category={cat} key={cat.id}/></td>)}
                            </tr>
                            <tr>
                                {row2.map((cat) => <td className='mainCategory'><MainCategoryBtn category={cat}/></td>)}
                         </tr>
                        </tbody>
                   </table>
                </div>
            )   
        }
    }
}

const mapStateToProps = (store) => store;


export default connect (mapStateToProps)(MainCategories);