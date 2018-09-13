import React, { Component } from 'react'

import Movie from './Movie'

class MoviesList extends Component {
	state={
		movies:[{
			id: '1994a1',
			img:'img/movie1.jpg',
			name:'mr magoriums wonder emporium 2007',
			rate: '7/10',
			ribbon: 'web-dl',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet expedita veniam enim maxime dolor, est.'
		},{
			id: '1994a2',
			img:'img/movie2.jpg',
			name:'next gun',
			rate: '8/10',
			ribbon: 'bluray',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet expedita veniam enim maxime dolor, est.'
		},{
			id: '1994a3',
			img:'img/movie3.jpg',
			name:'the rookie 1990',
			rate: '8/10',
			ribbon: 'hdcam',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet expedita veniam enim maxime dolor, est.'
		},{
			id: '1994a4',
			img:'img/movie4.jpg',
			name:'suicide squad 2016',
			rate: '8/10',
			ribbon: 'hdcam',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet expedita veniam enim maxime dolor, est.'
		},{
			id: '1994a5',
			img:'img/movie5.jpg',
			name:'battle of the damned 2013',
			rate: '8/10',
			ribbon: 'web-dl',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet expedita veniam enim maxime dolor, est.'
		},{
			id: '1994a6',
			img:'img/movie6.jpg',
			name:'the revenant 2018',
			rate: '8/10',
			ribbon: 'bluray',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet expedita veniam enim maxime dolor, est.'
		}]
	}
	render() {
		return (
			<div className='row m-0'>
				{
					this.state.movies.map((movie) => (
	              		<div className='col-12 col-md-6 col-lg-4' key={movie.id}>
	              	  		<Movie {...movie} />
	              		</div>
					))
				}
            </div>
		);
	}
}
export default MoviesList;
