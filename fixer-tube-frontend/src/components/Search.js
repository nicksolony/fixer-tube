import React, {Component} from 'react';


class Search extends Component {

    state = {
        searchValue:""
    }

    handleChange = (e) => {
        this.setState({searchValue:e.target.value})
        console.log(this.state);
    }


    render() {
        return(
            <span>
                <input type="text" value={this.state.searchValue} placeholder="Find how to fix it" onChange={this.handleChange}/>
                <input type="submit" value="Search"/>
            </span>
        )
    }
}


export default Search;