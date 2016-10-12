var db = require('./db.json');

var titles = db.seriesList.map(function(concert){
	return concert.title
})

var artists = db.guestArtists.map(function(artist){
	return artist.name
})

console.log(titles, artists);
