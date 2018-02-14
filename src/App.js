import React, { Component } from 'react';
import Listings from './components/Listings'
import HomeDetails from './components/HomeDetails'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Five Talent Real Estate</h1>
				</header>
				<Route exact path="/" component={Listings} />
				<Route path="/homes/:mls" component={HomeDetails} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
			</div>
        </Router>

    );
  }
}

export default App;
