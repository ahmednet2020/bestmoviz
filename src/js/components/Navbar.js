import React, { Component } from 'react'
import Search from './Search'
//import moduels rxjs
import { fromEvent } from 'rxjs'


class Navbar extends Component {
	state = {
		search:''
	}
	handelChange = (e) => {
		e.preventDefault();
		this.setState({
			search: e.target.value
		});
	}
	render() {
		return (
			<nav id='Nav'>
				<div className='container'>
					{/* start brand */}
					<a className="navbar-brand" href="#!">
						<h1>
							<span className='text-red'>Best</span>
							<span className='text-blue'>Moviz</span>
						</h1>
					</a>
					{/*end brand*/}
					{/*start search form*/}
					<Search handelChange={this.handelChange} value={this.state.search}/>
					{/*end search form*/}
					{/*subscribe button*/}
					<button type='button' className='btn btn-green btn-sub'>
						<i className="fa fa-user pr-1" aria-hidden="true"></i>
						register
					</button>
					{/*login button*/}
					<button type='button' className='btn btn-blue btn-login'>
						login
					</button>
					{/*start mobile view toggle button */}
					<div className='mobile-view'>
						{/*toggle button for form search*/}
						<button className='search-form-toggler'
								type='button'
								aria-label='Toggle search'>
							<span className='search-toggler-icon'>
								<i className="fa fa-search" aria-hidden="true"></i>
							</span>
						</button>
						{/*toggle button navbar*/}
						<button className="navbar-toggler"
								type="button" 
								data-toggle="show" 
								data-target=".menu"
								aria-controls="Nav" 
								aria-expanded="false" 
								aria-label="Toggle navigation">
								<span className='navbar-toggler-icon no-events'>
									<i className="fa fa-bars pl-1" aria-hidden="true"></i>
								</span>
						</button>
					</div>
					{/*end mobile view toggle button */}
				</div>
			</nav>
		);
	}
	componentDidMount() {
		// toggle navbar in mobile view
		const navbarToggler = document.querySelectorAll('.navbar-toggler');
		fromEvent(navbarToggler, 'click')
		.subscribe(e => {
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
		}, err => {
			console.log(`navbarToggler: ${err}`);
		})
	}
}
export default Navbar
