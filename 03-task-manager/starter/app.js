const express = require('express');
const tasks = require('./router/tasks');
const connectDB = require('../starter/db/connect');
require('dotenv').config()
const app = express();
const port = 3000;

app.use(express.json())

app.use('/api/v1/tasks', tasks)

app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start();