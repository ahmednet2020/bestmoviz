import React, { Component } from 'react'

import Movie from './Movie'

class MoviesList extends Component {
	state={
		movies:[{
			img:'img/movie1.jpg',
			name:'mr magoriums wonder emporium 2007',
			rate: '7/10',
			ribbon: 'web-dl',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet expedita veniam enim maxime dolor, est.'
		}]
	}
	render() {
		return (
			<div className='row m-0'>
				{
					this.state.movies.map((movie) => (
	              		<div className='col-12 col-md-6 col-lg-4'>
	              	  		<Movie {...movie}/>
	              		</div>
					))
				}
            </div>
		);
	}
}
export default MoviesList;
