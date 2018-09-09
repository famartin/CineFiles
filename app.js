const express = require('express');
const fetch = require('node-fetch');
const API = '?api_key=f7490bb2d22f0d184c552b8a15b5b733'
const app = express();

app.get('/api', (req, res) => {
	res.send('You\'re at \'/api\'');
});

app.get('/api/movie/latest', (req, res) => {
	fetch(`https://api.themoviedb.org/3/movie/latest${API}&language=en-US`)
		.then((data) => {
			return (data.json());
		})
		.then((json) => {
			console.log(json);
			res.send(json);
	});
});

app.get('/api/movie/now_playing/:page', (req, res) => {
	fetch(`https://api.themoviedb.org/3/movie/now_playing${API}&language=en-US&page=${req.params.page}`)
		.then((data) => {
			return (data.json());
		})
		.then((json) => {
			console.log(json);
			res.send(json);
	});
});

app.get('/api/discover/:page', (req, res) => {
	fetch(`https://api.themoviedb.org/3/discover/movie${API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${req.params.page}`)
		.then((data) => {
			return (data.json());
		})
		.then((json) => {
			console.log(json);
			res.send(json);
	});
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});