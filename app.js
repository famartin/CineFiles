const express = require('express');
const app = express();

app.get('/api', (req, res) => {
	res.send('You\'re at \'/api\'');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});