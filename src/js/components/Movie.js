import React from 'react';

export default function({img, name,rate, description, ribbon})
{
	return (
		<a href='#!' className={`movie ${ribbon}`}>
			<figure>
				<img src={img} alt={name} title='name' className='movie-img'/>
				<figcaption>
					<span className='ribbon'>
						<span className='ribbon-text'>
							{ribbon}
						</span>
					</span>
					<div  className='movie-title'>
						<h5 className='movie-name'>{name}</h5>
						<div className='rate'>{rate}</div>
						<p className='movie-description'>{description}</p>
					</div>
				</figcaption>
			</figure>
		</a>
	)
};
