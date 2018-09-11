import React from 'react';

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
						<a href='#!' className='menu-link active'>
							<span className='navbar-toggler-icon no-events'>
								<i className="fa fa-home" aria-hidden="true"></i>
							</span>
							<span className='menu-name no-events'>bestmoviz</span>
						</a>
					</li>
					<li>
						<a href='#!' className='menu-link'>
							<span className='navbar-toggler-icon no-events'>
								<i className="fa fa-line-chart" aria-hidden="true"></i>
							</span>
							<span className='menu-name no-events'>trending</span>
						</a>
					</li>
					<li>
						<a href='#!' className='menu-link'>
							<span className='navbar-toggler-icon no-events'>
								<i className="fa fa-film" aria-hidden="true"></i>
							</span>
							<span className='menu-name no-events'>movies</span>
						</a>
					</li>
					<li>
						<a href='#!' className='menu-link'>
							<span className='navbar-toggler-icon no-events'>
								<i className="fa fa-television" aria-hidden="true"></i>
							</span>
							<span className='menu-name no-events'>tv</span>
						</a>
					</li>
					{/*end menu item */}
				</ul>
			</div>
			{/*end menu*/}
		</aside>
	)
}
