const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();


const API = '?api_key=f7490bb2d22f0d184c552b8a15b5b733';

router.get('/', (req, res) => {
	res.send('You\'re at \'/discover\'');
});

/* GET Request to discover movies within a specfic page number */

router.get('/movie/:page', (req, res) => {
	fetch(`https://api.themoviedb.org/3/discover/movie${API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${req.params.page}`)
		.then((data) => {
			return (data.json());
		})
		.then((json) => {
			console.log(json);
			res.send(json);
	});
});

/* GET Request to discover tv shows within a specfic page number */

router.get('/tv/:page', (req, res) => {
	fetch(`https://api.themoviedb.org/3/discover/tv${API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${req.params.page}&timezone=America%2FNew_York&include_null_first_air_dates=false`)
		.then((data) => {
			return (data.json());
		})
		.then((json) => {
			console.log(json);
			res.send(json);
	});
});

module.exports = router;