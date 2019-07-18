const express = require('express')
const app = express()
const PORT = 4001
const Ctrl = require('./controller')

app.use(express.json())

app.listen(PORT, () => console.log(`${PORT} puppies on parade`))

