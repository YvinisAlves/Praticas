const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) =>{
    return res.json([
        {nome: 'Jão', idade: '20', sexo: 'Homem'},
        {nome: 'Flipe', idade: '23', sexo: 'Homem'},
        {nome: 'Má-t-us', idade: '19', sexo: 'Homem'},
        {nome: 'Duarda', idade: '20', sexo: 'Mulher'},
        {nome: 'Craudia', idade: '23', sexo: 'Mulher'},
        {nome: 'Juia', idade: '23', sexo: 'Mulher'},
        {nome: 'Nice', idade: '69', sexo: 'Helicoptero Apache'}
    ])
})

app.listen('4567')
// npm start
// node server.js