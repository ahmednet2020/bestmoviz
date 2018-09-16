import React, { Component } from 'react';

class Tage extends Component {
	state={
		tages:['2017', '2018', 'bluray', 'subbed', 'us']
	}
	render() {
		return (
			<section className='tages'>
				<div className='row m-0'>
					{
						this.state.tages.map((tage) => (
							<div className='col-12 col-lg-6' key={tage}>
								<a href='#!' className='tage-link'>
									{
										`movies ${tage}`
									}
								</a>
							</div>
						))
					}
				</div>
			</section>
		)
	}
}

export default Tage;