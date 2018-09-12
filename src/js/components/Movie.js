import React from 'react';

export default function({img, name,rate, description, ribbon})
{
	return (
		<a href='#!' className='movie'>
			<figure>
				<img src={img} alt={name} title='name' className='movie-img'/>
				<figcaption className='movie-title'>
					<h5 className='movie-name'>{name}</h5>
					<div className='rate'>{rate}</div>
					<p className='movie-description'>{description}</p>
					<span className='ribbon'>
						<span>
							{ribbon}
						</span>
					</span>
				</figcaption>
			</figure>
		</a>
	)
};
