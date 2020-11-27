import React, {Component} from "react";
import { connect } from "react-redux";
import MainCategory from "./MainCategory"



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
                                {row1.map((cat) => <td className='mainCategory'><MainCategory category={cat}/></td>)}
                            </tr>
                            <tr>
                                {row2.map((cat) => <td className='mainCategory'><MainCategory category={cat}/></td>)}
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