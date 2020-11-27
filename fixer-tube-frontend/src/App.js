import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NewVideo from './components/NewVideo';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/videos/new" component={NewVideo} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;
