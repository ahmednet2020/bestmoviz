import React, { Component } from 'react'
import Search from './Search'

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
			<nav>
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
								data-toggle="collapse" 
								data-target=""
								aria-controls="" 
								aria-expanded="false" 
								aria-label="Toggle navigation">
							<span className="navbar-toggler-icon">
								<i className="fa fa-bars" aria-hidden="true"></i>
							</span>
						</button>
					</div>
					{/*end mobile view toggle button */}
				</div>
			</nav>
		);
	}
}
export default Navbar
