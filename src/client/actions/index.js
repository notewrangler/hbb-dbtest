import axios from 'axios';


export const GET_NEXT_CONCERT = 'GET_NEXT_CONCERT';
export const GET_NEXT_CONCERT_INITIATED = 'GET_NEXT_CONCERT_INITIATED';
export const GET_NEXT_CONCERT_SUCCEEDED = 'GET_NEXT_CONCERT_SUCCEEDED';
export const GET_NEXT_CONCERT_FAILED = 'GET_NEXT_CONCERT_FAILED'
export const GET_SERIES = 'GET_SERIES';
export const GET_SERIES_INITIATED = 'GET_SERIES_INITIATED';
export const GET_SERIES_SUCCEEDED = 'GET_SERIES_SUCCEEDED';
// export const GET_SERIES_FAILED = 'GET_SERIES_FAILED'
export const GET_GUESTS = 'GET_GUESTS';
export const GET_CONCERT = 'GET_CONCERT';
export const GET_ARTIST = 'GET_ARTIST';

const ROOT_URL = 'http://localhost:8001'

function getSeriesInitiated() {
	return {
		type: GET_SERIES_INITIATED
	};
}

function getSeriesSucceeded(data) {
	return {
		type: GET_SERIES_SUCCEEDED,
		payload: data
	}
}






export function getSeries(){
	return (dispatch) => {
		dispatch(getSeriesInitiated());
		axios.get(`${ROOT_URL}/seriesList`).then((response) => {
		if(response.statusText === "OK") {
			dispatch(getSeriesSucceeded(response.data))
		} else {
			console.log(response);
		}
	});
	}
}

	// (dispatch) => {
	// 	dispatch(getNextConcertInitiated())
	// 	axios.get(url).then((response) => {
	// 		if(response.statusText === "OK") {
	// 		// nextGig = getNext(response.data)
	// 			dispatch(getSeriesSucceeded(nextGig))
	// 		} else {
	// 			console.log(response);
	// 			dispatch(getSeriesFailed(response))
	// 		}
	// 	});
	// 	};
	// }
	// const request = axios.get(url)
	// .then(function(resp){
	// 	console.log(resp.data);
	// 	return resp.data
	// });


// export function getSeries() {
// 	const url = `${ROOT_URL}/seriesList`;
// 	const request = axios.get(url).then(function(resp){
// 		return resp.data
// 	});
//
// 	return {
// 		type: GET_SERIES,
// 		payload: request
// 	}
// }

export function getConcert(id) {
	const url = `${ROOT_URL}/seriesList/${id}`;
	const request = axios.get(url).then(function(resp){
		return resp.data[0]
	});

	return {
		type: GET_CONCERT,
		payload: request
	}
}

export function getGuests() {
	const url = `${ROOT_URL}/guestArtists`;
	const request = axios.get(url).then(function(resp){
		return resp.data
	});

	return {
		type: GET_GUESTS,
		payload: request
	}
}

export function getArtist(id) {
	const url = `${ROOT_URL}/guestArtists${id}`;
	const request = axios.get(url).then(function(resp){
		return resp.data[0]
	});

	return {
		type: GET_ARTIST,
		payload: request
	}
}
