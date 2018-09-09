import React from 'react';

export default function (props)
{
	return (
		<aside>
			<div className='menu' id='Menu'>
				<ul>
					<li className='menu-toggle'>
						<button className="navbar-toggler menu-link"
								type="button" 
								data-toggle="show" 
								data-target=".menu"
								aria-controls="Menu" 
								aria-expanded="false" 
								aria-label="Toggle navigation">
								<span className='navbar-toggler-icon'>
									<i className="fa fa-bars pr-1" aria-hidden="true"></i>
								</span>
								<span className='menu-name'>menu</span>
						</button>
					</li>
					<li>
						<a href='#!' className='menu-link active'>
							<i className="fa fa-home pr-1" aria-hidden="true"></i>
							<span className='menu-name'>bestmoviz</span>
						</a>
					</li>
					<li>
						<a href='#!' className='menu-link'>
							<i className="fa fa-line-chart pr-1" aria-hidden="true"></i>
							<span className='menu-name'>trending</span>
						</a>
					</li>
					<li>
						<a href='#!' className='menu-link'>
							<i className="fa fa-film pr-1" aria-hidden="true"></i>
							<span className='menu-name'>movies</span>
						</a>
					</li>
					<li>
						<a href='#!' className='menu-link'>
							<i className="fa fa-television pr-1" aria-hidden="true"></i>
							<span className='menu-name'>tv</span>
						</a>
					</li>
				</ul>
			</div>
		</aside>
	)
}
