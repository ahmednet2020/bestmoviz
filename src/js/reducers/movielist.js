import movies from '../data/movies'

export default function (state=[], action) {
	let newState = [].concat(movies);
	if(action.type === 'MOVIE_LIST'){
		return newState.slice(action.start,action.end)
	} else {
		return newState;
	}
}