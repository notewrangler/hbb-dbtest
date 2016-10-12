import axios from 'axios'

export function addContact(data) {
	return axios({
		url: 'https://formspree.io/heartlandjazzartsgroup@gmail.com',
		method: 'Post',
		data: data,
		dataType: 'json'
	}).then(function(resp) {
		console.log(resp);
	})
}


export function addToMailingList(data) {
	return axios.post("/mail", data)
}

// export function memberPortal(data) {
// 	return axios.post("/members", data).then(function(resp){
// 		console.log(resp);
// 	})
// }

// .then(function(resp){
// 	console.log(resp)
