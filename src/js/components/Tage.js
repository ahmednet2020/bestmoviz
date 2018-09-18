import React, { Component } from 'react';

class Tage extends Component {
	state={
		tages:['2017', 
		'2018', 
		'bluray', 
		'subbed', 
		'us', 
		'hd', 
		'war', 
		'arab', 
		'egypt', 
		'hindi', 
		'korean', 
		'japanese', 
		'horror', 
		'action', 
		'romance', 
		'comedy', 
		'animation', 
		'scifi', 
		'documentary']
	}
	render() {
		return (
			<section className='tages my-4'>
				<div className='row m-0'>
					{
						this.state.tages.map((tage) => (
							<div className='col-12 col-lg-6' key={tage}>
								<a href='#!' className='tage-link'>
									{
										`${tage}`
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