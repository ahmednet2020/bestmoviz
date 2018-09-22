import React, { Component } from 'react'
// import components
import Movietable from './Movietable'

//function for event click to downpage
class Movieitem extends Component {
	downtomovie = (e) => {
		e.preventDefault();
		let x = document.querySelector(e.target.getAttribute('href'));
		window.scrollTo(0, x.offsetTop);
	}
	render() {
		return (
			<div className={`movie-item movie ${this.props.state.ribbon}`}>
				<div className='row m-0'>
					<div className='col-12 col-lg-4'>
						<figure>
							<img src={`../${this.props.state.img}`} alt={this.props.state.name} title={this.props.state.name} className='movie-img'/>
							<figcaption>
								<span className='ribbon'>
									<span className='ribbon-text'>
										{this.props.state.ribbon}
									</span>
								</span>
							</figcaption>
						</figure>
					</div>
					<div className='col-12 col-lg-8'>
						<Movietable state={this.props.state}/>
					</div>
					<div className='col-12'>
						<a href="#download" className="btn btn-green mt-1" onClick={this.downtomovie}>
							<i className="fa fa-cloud-download pr-1" aria-hidden="true"></i>
							watch and download movie
						</a>
					</div>
					{ this.props.state.ribbon !== 'bluray' &&
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
								{this.props.state.description}
							</p>
						</div>
					</div>
					<div className='col-12'>
						<div className='trailer box'>
							<h4 className='title'>
								trailer
							</h4>
							<div className='video content'>
								<img src={`https://img.youtube.com/vi/${this.props.state.trailer}/hqdefault.jpg`} alt={this.props.state.name} title={this.props.state.name} className='movie-img'/>
							</div>
						</div>
					</div>
					<div id='download'>download</div>
					<div id="disqus_thread" style={{
						'width':'100%'
					}}></div>
				</div>
			</div>
		);
	}
	componentDidMount()
	{
		let url = this.props.url;
		let identifier = this.props.state.id;
		/**
		*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
		*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
		// eslint-disable-next-line
		var disqus_config = function () {
		this.page.url = url;  // Replace PAGE_URL with your page's canonical URL variable
		this.page.identifier = identifier; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
		};
		(function() { // DON'T EDIT BELOW THIS LINE
		let d = document, s = d.createElement('script');
		s.src = 'https://bestmoviz.disqus.com/embed.js';
		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);
		})();                
	}
}
export default Movieitem