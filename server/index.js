const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const apiPort = 3004;
const movieRouter = require('./routes/movie-router')

const db = require('./db')

app.use(bodyParser.urlencoded({extended : true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error' , console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', movieRouter)

app.get('/', (req, res) => {
	res.send('Hello react app')
})

app.listen(apiPort, () => {
	console.log(`Server running on port ${apiPort}`)
})
