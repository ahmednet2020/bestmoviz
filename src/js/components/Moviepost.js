import React from 'react';

export default function (props) {
	return (
		<figure>
			<img src={`../${props.state.img}`} alt={props.state.name} title={props.state.name} className='movie-img'/>
			<figcaption>
				<span className='ribbon'>
					<span className='ribbon-text'>
						{props.state.ribbon}
					</span>
				</span>
			</figcaption>
		</figure>
	)
}
