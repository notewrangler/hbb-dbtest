#!/usr/bin/env nodejs
var axios = require('axios');

var seriesListItem = axios.get('http://localhost:8001/seriesList/3');

console.log(seriesListItem);
