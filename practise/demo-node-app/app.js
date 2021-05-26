const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hey!! Welcome to the new version 2'))

app.listen(3000, () => console.log('Ready!!'))