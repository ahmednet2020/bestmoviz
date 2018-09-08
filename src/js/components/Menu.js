import React from 'react';

export default function (props)
{
	return (
		<aside>
			<div className='menu'>
				<ul>
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
