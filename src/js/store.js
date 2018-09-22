import { createStore, combineReducers } from 'redux'
//import reducers
import movielist from './reducers/movielist'
import search from './reducers/search'

const rootReducers = combineReducers({movielist,search});
const store = createStore(rootReducers);

export default store;