const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const API = '?api_key=f7490bb2d22f0d184c552b8a15b5b733';

router.get('/movie/:name/:page', (req, res) => {
	fetch(`https://api.themoviedb.org/3/search/movie${API}&language=en-US&query=${req.params.name}&page=${req.params.page}&include_adult=false`)
		.then((data) => {
			return (data.json());
		})
		.then((json) => {
			console.log(json);
			res.send(json);
	});
});

module.exports = router;