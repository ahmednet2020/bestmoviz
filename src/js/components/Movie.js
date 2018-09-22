import React from 'react'
// import router moduels
import { Link } from "react-router-dom"

export default function(props)
{
	return (
		<Link to={{
			pathname:`/movie/${props.id}`,
			state:{movie:props}
		}} className={`movie ${props.ribbon}`}>
			<figure>
				<img src={props.img} alt={props.name} title='name' className='movie-img'/>
				<figcaption>
					<span className='ribbon'>
						<span className='ribbon-text'>
							{props.ribbon}
						</span>
					</span>
					<div  className='movie-title'>
						<h5 className='movie-name'>{props.name}</h5>
						<div className='rate'>{props.rate}</div>
						<p className='movie-description'>{props.description}</p>
					</div>
				</figcaption>
			</figure>
		</Link>
	)
};
