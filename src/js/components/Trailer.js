import React from 'react';

export default function (props) {
	return (
		<div className='trailer box'>
			<h4 className='title'>
				trailer
			</h4>
			<div className='video content'>
			{
				props.play === true? (
					<iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.state.trailer}?autoplay=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title={props.state.name}></iframe>
				):(
					<div>
					<img src={`https://img.youtube.com/vi/${props.state.trailer}/hqdefault.jpg`} alt={props.state.name} title={props.state.name} className='movie-img'/>
					<button type='button' className='btn btn-play' onClick={props.playVideo}>
						<i className="fa fa-play fa-lg no-events" aria-hidden="true"></i>
					</button>
					</div>
				)
			}
			</div>
		</div>
	)
}
