import React, { Component } from 'react'
// import components
import Movietable from './Movietable'
import Moviepost from './Moviepost'
import Notice from './Notice'
import Trailer from './Trailer'
//function for event click to downpage
class Movieitem extends Component {
	state={play:false}
	downtomovie = (e) => {
		e.preventDefault();
		let x = document.querySelector(e.target.getAttribute('href'));
		window.scrollTo(0, x.offsetTop);
	}
	playVideo = (e) => {
		e.preventDefault();
		this.setState({play:true});
	}
	render() {
		return (
			<div className={`movie-item movie ${this.props.state.ribbon}`}>
				<div className='row m-0'>
					<div className='col-12 col-lg-4'>
						<Moviepost {...this.props}/>
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
							<Notice />
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
						<Trailer {...this.props} playVideo={this.playVideo} play={this.state.play}/>
					</div>
					<div className='col-12'>
						<div id='download'>download</div>
					</div>
					<div className='col-12'>
						{/*disqus tage content*/}
						<div id="disqus_thread" style={{
							'width':'100%'
						}}></div>
					</div>
				</div>
			</div>
		);
	}
	componentDidMount()
	{
		window.scrollTo(0,0);
		let url = window.location.href;
		let identifier = this.props.state.id;
		//disqus_config config var 
		window.disqus_config = function () {
			this.page.url = url;
			this.page.identifier = identifier;
			this.language ='ar';
		};
		// if first time or not 
		if(window.DISQUS)
		{
			window.DISQUS.reset({
			  reload: true,
			  config: function () {  
			    this.page.url = url;
				this.page.identifier = identifier;
				this.language ='ar';
			  }
			});
		} else {
			// add disqus script in first time commant
			(function() { // DON'T EDIT BELOW THIS LINE
			let d = document, s = d.createElement('script');
			s.type = 'text/javascript';
			s.async = true;
			s.src = 'https://bestmoviz.disqus.com/embed.js';
			s.setAttribute('data-timestamp', +new Date());
			(d.head || d.body).appendChild(s);
			})();
		}             
	}
}
export default Movieitem