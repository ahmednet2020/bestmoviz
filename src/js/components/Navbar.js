import React, { Component } from 'react'
// import redux moduel 
import { connect } from 'react-redux'
// import action moduel 
import search from '../action/search'
//import router modules
import { withRouter, Link } from 'react-router-dom'
//import components
import Search from './Search'
import SearchItem from './SearchItem'

class Navbar extends Component {
	state={
		search:''
	}
	handelClear = (e) => {
		e.preventDefault();
		this.props.searchAction('')
		this.setState({search:''})
	}
	handelChange = (e) => {
		e.preventDefault();
		this.props.searchAction(e.target.value)
		this.setState({search:e.target.value})
	}
	render() {
		return (
			<nav>
				<div className='container'>
					{/* start brand */}
					<Link className="navbar-brand" to='/'>
						<h1>
							<span className='text-red'>Best</span>
							<span className='text-blue'>Moviz</span>
						</h1>
					</Link>
					{/*end brand*/}
					{/*start search form*/}
					<div className='search' id='Search'>
						<Search handelChange={this.handelChange}
							clear={this.handelClear}
							value={this.state.search}/>
						<SearchItem 
							items={this.props.search} 
							location={this.props.location}
							/>
					</div>
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
						<button className='search-form-toggler btn-Toggler'
								type='button'
								data-toggle="show" 
								data-target="#Search"
								aria-controls="Search" 
								aria-expanded="false" 
								aria-label='Toggle search'
								onClick={this.props.handelToggler}>
							<span className='search-toggler-icon no-events'>
								<i className="fa fa-search" aria-hidden="true"></i>
							</span>
						</button>
						{/*toggle button navbar*/}
						<button className="navbar-toggler btn-Toggler"
								type="button" 
								data-toggle="show" 
								data-target="#Menu"
								aria-controls="Menu" 
								aria-expanded="false" 
								aria-label="Toggle navigation"
								onClick={this.props.handelToggler}>
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
}
function mapStateToProps(store){
	return {
		search:store.search
	}
}
function mapDispatchToProps(dispatch){
	return {
		searchAction:(val) => {
			dispatch(search(val))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Navbar))
