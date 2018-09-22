import React, { Component } from 'react'
// import redux moduel 
import { connect } from 'react-redux'
// import components
import Movie from './Movie'
class MoviesList extends Component {
	render() {
		return (
			<section className='row m-0'>
				{
					this.props.movielist.map((movie) => (
	              		<div className='col-12 col-md-6 col-lg-4' key={movie.id}>
	              	  		<Movie {...movie} />
	              		</div>
					))
				}
            </section>
		);
	}
}
function mapStateToProps(store){
	return {
		movielist:store.movielist
	}
}
export default connect(mapStateToProps)(MoviesList);
