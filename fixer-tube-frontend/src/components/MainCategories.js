import React, {Component} from 'react';
import { connect } from "react-redux";


class MainCategories   extends Component {
    render() {
        return(
            <div>
               <table>
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

export default MainCategories;