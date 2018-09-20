import React, { Component } from 'react'
//import modules
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import pages
import Navbar from './js/components/Navbar'
import Home from './js/pages/Home'
import Moviepage from './js/pages/Moviepage'

class App extends Component {

	handelToggler(e)
	{
		// toggle navbar in mobile view
		e.persist();
		e.preventDefault();
		if(e.target.getAttribute('aria-expanded') === 'false')
		{
			e.target.setAttribute('aria-expanded','true')
			document.querySelector(e.target.dataset.target).classList.add('d-block');
			setTimeout(()=> {
				document.querySelector(e.target.dataset.target).classList.add(e.target.dataset.toggle);
			}, 2);
			document.body.classList.add('hiden-scroll');
		} else if (e.target.getAttribute('aria-expanded') === 'true') {
			e.target.setAttribute('aria-expanded','false')
			document.querySelector(e.target.dataset.target).classList.remove(e.target.dataset.toggle);
			document.querySelector(e.target.dataset.target)
			.addEventListener('transitionend', function transitionend(ev) {
				this.removeEventListener('transitionend', transitionend);
				document.querySelector(e.target.dataset.target).classList.remove('d-block');
			})
			document.body.classList.remove('hiden-scroll');
		}
	}

  render()
  {
    return (
    	<Router>
	      <div className="App">
	      		<Navbar handelToggler={this.handelToggler}/>
	      	<Switch>
	      		<Route exact path="/" render={
	      			(match) => <Home {...match} handelToggler={this.handelToggler}/>
	      		}/>
	      		<Route path="/movie/:id" render={
	      			(match) => <Moviepage {...match} handelToggler={this.handelToggler}/>
	      		}/>
	      		<Route render={(match) => <Redirect push to='/'/>} />
	      	</Switch>
	      </div>
     	</Router>
    );
  }
}

export default App
