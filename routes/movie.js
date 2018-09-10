const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();


const API = '?api_key=f7490bb2d22f0d184c552b8a15b5b733';

router.get('/', (req, res) => {
	res.send('You\'re at \'/movie\'');
});

router.get('/latest', (req, res) => {
	fetch(`https://api.themoviedb.org/3/movie/latest${API}&language=en-US`)
		.then((data) => {
			return (data.json());
		})
		.then((json) => {
			console.log(json);
			res.send(json);
	});
});

router.get('/now_playing/:page', (req, res) => {
	fetch(`https://api.themoviedb.org/3/movie/now_playing${API}&language=en-US&page=${req.params.page}`)
		.then((data) => {
			return (data.json());
		})
		.then((json) => {
			console.log(json);
			res.send(json);
	});
});

module.exports = router;