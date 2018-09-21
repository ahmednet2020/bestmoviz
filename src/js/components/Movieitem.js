import React from 'react';
import Movietable from './Movietable'

//function for event click to downpage
function downtomovie(e)
{
	e.preventDefault();
	let x = document.querySelector(e.target.getAttribute('href'));
	window.scrollTo(0, x.offsetTop);
}
export default function (props) {
	return (
		<div className={`movie-item movie ${props.state.ribbon}`}>
			<div className='row m-0'>
				<div className='col-12 col-lg-4'>
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
				</div>
				<div className='col-12 col-lg-8'>
					<Movietable state={props.state}/>
				</div>
				<div className='col-12'>
					<a href="#download" className="btn btn-green mt-1" onClick={downtomovie}>
						<i className="fa fa-cloud-download pr-1" aria-hidden="true"></i>
						watch and download movie
					</a>
				</div>
				{ props.state.ribbon !== 'bluray' &&
				<div className='col-12'>
					<div className='notice'>
						<p><i className="fa fa-exclamation-triangle pr-1" aria-hidden="true"></i>
							this movie is not allow bluray beacose he is in cinma
						</p>
						<p>
							copy <strong>bluray</strong> allow in <strong>novmber 2018</strong>

						</p>
					</div>
				</div>
				}
				<div className='col-12'>
					<div className='description box'>
						<h4 className='title'>
							description
						</h4>
						<p className='text content'>
							{props.state.description}
						</p>
					</div>
				</div>
				<div className='col-12'>
					<div className='trailer box'>
						<h4 className='title'>
							trailer
						</h4>
						<div className='video content'>
							<img src={`https://img.youtube.com/vi/${props.state.trailer}/hqdefault.jpg`} alt={props.state.name} title={props.state.name} className='movie-img'/>
						</div>
					</div>
				</div>
				<div id='download'>download</div>
			</div>
		</div>
	);
}
