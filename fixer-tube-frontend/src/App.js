import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NewVideo from './components/NewVideo'
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import {loadMainCategories} from "./redux/actions/videoActions"
import './App.css';
import MainCategory from './components/MainCategory';
import Category from './components/Category';
import Brand from './components/Brand';


class App extends Component {
  componentDidMount() {
    this.props.loadMainCategoriesFromDb()
  }

  render() {
     return (
      <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/videos/new" component={NewVideo} />
          <Route path="/main_categories/:id" component={MainCategory} />
          <Route path="/categories/:main_category_id/:id" component={Category} />
          <Route path="/brands/:main_category_id/:id" component={Brand} />



        </Switch>
      </Router>
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      loadMainCategoriesFromDb: () => dispatch(loadMainCategories())
  }
}


export default connect (null, mapDispatchToProps)(App);
