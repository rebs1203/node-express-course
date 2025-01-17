const express = require('express');
const tasks = require('./router/tasks');
const connectDB = require('../starter/db/connect');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start();