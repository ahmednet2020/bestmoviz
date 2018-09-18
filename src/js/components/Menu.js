import React from 'react'
// import moduels
import { NavLink } from 'react-router-dom'
export default function (props)
{
	return (
		<aside>
			{/*start menu*/}
			<div className='menu' id='Menu'>
				<ul>
					{/*first item for toggle menu item in mid device*/}
					<li className='menu-toggle'>
						<button className="navbar-toggler menu-link btn-Toggler"
								type="button" 
								data-toggle="show" 
								data-target=".menu"
								aria-controls="Menu" 
								aria-expanded="false" 
								aria-label="Toggle navigation">
								<span className='navbar-toggler-icon no-events'>
									<i className="fa fa-bars" aria-hidden="true"></i>
								</span>
								<span className='menu-name no-events'>menu</span>
						</button>
					</li>
					{/*start menu item */}
					<li>
						<NavLink to="/" className='menu-link' activeClassName='active'>
							<span className='navbar-toggler-icon no-events'>
								<i className="fa fa-home" aria-hidden="true"></i>
							</span>
							<span className='menu-name no-events'>bestmoviz</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/trending" className='menu-link' activeClassName='active'>
							<span className='navbar-toggler-icon no-events'>
								<i className="fa fa-line-chart" aria-hidden="true"></i>
							</span>
							<span className='menu-name no-events'>trending</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/movies" className='menu-link' activeClassName='active'>
							<span className='navbar-toggler-icon no-events'>
								<i className="fa fa-film" aria-hidden="true"></i>
							</span>
							<span className='menu-name no-events'>movies</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/tv" className='menu-link' activeClassName='active'>
							<span className='navbar-toggler-icon no-events'>
								<i className="fa fa-television" aria-hidden="true"></i>
							</span>
							<span className='menu-name no-events'>tv</span>
						</NavLink>
					</li>
					{/*end menu item */}
				</ul>
			</div>
			{/*end menu*/}
		</aside>
	)
}
