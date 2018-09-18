const express = require('express');
const fetch = require('node-fetch');

const API = '?api_key=f7490bb2d22f0d184c552b8a15b5b733';
const movie = require('./routes/movie');
const discover = require('./routes/discover');
const search = require('./routes/search');

const app = express();

app.use('/api/movie', movie);
app.use('/api/discover', discover);
app.use('/api/search', search);

app.get('/api', (req, res) => {
	res.send('You\'re at \'/api\'');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});