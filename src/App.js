import React, { Component } from 'react'
//import modules
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import pages
import Navbar from './js/components/Navbar'
import Home from './js/pages/Home'

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	      		<Navbar />
	      	<Switch>
	      		<Route exact path="/" component={Home} />
	      		<Route render={(match) => <Redirect push to='/'/>} />
	      	</Switch>
	      </div>
     	</Router>
    );
  }
}

export default App
