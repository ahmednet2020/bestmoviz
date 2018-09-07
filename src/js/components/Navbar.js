import React, { Component } from 'react'

class Navbar extends Component {
	render() {
		return (
			<nav>
				<div className='container'>
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
					{/*login button*/}
					<button type='button' className='btn btn-blue btn-login'>
						login
					</button>
					{/*subscribe button*/}
					<button type='button' className='btn btn-green btn-sub'>
						subscribe
					</button>
					{/*start search form*/}
					<form>
						<div className='input'>
							<input type='text' 
									name='search'
									aria-label='search movize'
									id='search'
									required='required' 
									autoComplete='off'/>
							<label htmlFor='search' className='placeholder'>
								search for movize or tv or actor ...
							</label>
							<span className='placeholder-icon'>
								<i className="fa fa-search" aria-hidden="true"></i>
							</span>
						</div>
					</form>
					{/*end search form*/}
					{/* start brand */}
					<a className="navbar-brand" href="#!">
						<h1>
							<span className='text-red'>Best</span>
							<span className='text-blue'>Moviz</span>
						</h1>
					</a>
					{/*end brand*/}
				</div>
			</nav>
		);
	}
}
export default Navbar
