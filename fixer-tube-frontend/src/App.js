import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NewVideo from './components/NewVideo'
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import {loadData} from "./redux/actions/videoActions"
import './App.css';
import MainCategory from './components/MainCategory';
import Category from './components/Category';
import Brand from './components/Brand';
import Video from './components/Video';


class App extends Component {
  componentDidMount() {
    this.props.loadDataFromDb()
  }

  render() {
     return (
      <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/videos/new" component={NewVideo} />
          <Route path="/main_categories/:slug" component={MainCategory} />
          <Route path="/categories/:slug" component={Category} />
          <Route path="/brands/:main_category_slug/:slug" component={Brand} />
          <Route path="/brands/:slug" component={Brand} />
          <Route path="/videos/:slug" component={Video} />



        </Switch>
      </Router>
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      loadDataFromDb: () => dispatch(loadData())
  }
}


export default connect (null, mapDispatchToProps)(App);
