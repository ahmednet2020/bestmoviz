import React from 'react';
import Movietable from './Movietable'
export default function (props) {
	console.log(props);
	return (
		<div className={`movie-item movie ${props.state.ribbon}`}>
			<div className='row'>
				<div className='col-12 col-lg-4'>
					<figure>
						<img src={`../${props.state.img}`} alt={props.state.name} title='name' className='movie-img'/>
						<figcaption>
							<span className='ribbon'>
								<span className='ribbon-text'>
									{props.state.ribbon}
								</span>
							</span>
							<a href="#download" className="btn btn-green">
								<i className="fa fa-cloud-download pr-1" aria-hidden="true"></i>
								watch and download movie
							</a>
						</figcaption>
					</figure>
				</div>
				<div className='col-12 col-lg-8'>
					<Movietable state={props.state}/>
				</div>
			</div>
		</div>
	);
}
