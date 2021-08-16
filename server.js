const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) =>{
    return res.json([
        {name: 'Jão'},
        {name: 'Flipe'}
    ])
})

app.listen('4567')