import { combineReducers } from 'redux';
import { GET_SERIES, GET_NEXT_CONCERT, GET_CONCERT, GET_GUESTS, GET_ARTIST} from '../actions/index';


const INITIAL_SERIES_STATE = {};

const nextConcert = function(state = INITIAL_SERIES_STATE, {type, payload}) {
  switch (type) {
  case 'GET_NEXT_CONCERT_SUCCEEDED':
    return {...state, ...payload};
  case 'CREATE_NEXT_CONCERT_INITIATED':
    return {...state, optimistic: {data: payload}}
  // case 'CREATE_NEXT_CONCERT_SUCCEEDED':
  //   const {optimistic, ...oldState} = state;
  //   return {...oldState, [payload.data]: optimistic};
  default:
    return state;
  }
}

const series = function(state = [], action) {
	switch (action.type) {
		case GET_SERIES:
		return [ action.payload.data, ...state];
	}
	return state;
}


const concert = function(state = {}, action) {
	switch (action.type) {
		case GET_CONCERT:
		return [action.payload.data, ...state]
	}
	return state;
}


const guests = function(state = [], action) {
	switch (action.type) {
		case GET_GUESTS:
		return [ action.payload.data, ...state];
	}
	return state;
}

const artist = function(state = {}, action) {
	switch (action.type) {
		case GET_ARTIST:
		return [ action.payload.data, ...state];
	}
	return state;
}




const rootReducer = combineReducers({
  series,
	nextConcert,
	concert,
	guests,
	artist
});

export default rootReducer;
