import { createStore, combineReducers } from 'redux';
import { GET_SERIES_SUCCEEDED,
	 			 GET_NEXT_CONCERT_SUCCEEDED,
				 GET_CONCERT_SUCCEDED,
				 GET_GUESTS_SUCCEEDED,
				 GET_ARTIST_SUCCEEDED} from './actions/index';


// import reducers here


const seriesList = function(state = [], action) {
	switch (action.type) {
		case GET_SERIES_SUCCEEDED:
			console.log(action.payload);
			return [...state, action.payload];
		// default:
		// 	return state;
	}
}

// function nextConcert(state = {nextConcert: {}}, action) {
// 	switch (action.type) {
// 		case GET_NEXT_CONCERT_SUCCEEDED:
// 			return [...state, action.payload];
// 		default:
// 			return state;
// 	}
//
// }

// const concert = function(state = {}, action) {
// 	switch (action.type) {
// 		case GET_CONCERT:
// 		return [action.payload.data, ...state]
// 	}
// 	return state;
// }


// const guests = function(state = [], action) {
// 	switch (action.type) {
// 		case GET_GUESTS:
// 		return [ action.payload.data, ...state];
// 	}
// 	return state;
// }

// const artist = function(state = {}, action) {
// 	switch (action.type) {
// 		case GET_ARTIST:
// 		return [ action.payload.data, ...state];
// 	}
// 	return state;
// }



// combine reducers
const reducers = combineReducers({
  // put reducers here
  seriesList
	// nextConcert
	// concert,
	// guests,
	// artist
})

// create the store
export default reducers;
