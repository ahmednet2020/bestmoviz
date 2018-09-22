import movies from '../data/movies'

export default function (state, action) {
	let newState = [].concat(movies);
	if(action.type === 'SEARCH'){
		return newState.filter((movie)=> movie.name.indexOf(action.search) === 0)
	} else {
		return [];
	}
}