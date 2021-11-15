import express from 'express'
import {datas} from './sampleData.js'

//initializing the express server
const app = express()

app.get('/api/test', (req, res) => {
    res.send(datas)
})

app.listen(5000, () => {
    console.log('server started at port 5000')
})