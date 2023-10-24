const express = require('express')
const peopleRouter = require('./routes/people');

const app = express();

const port = 3000;

app.use(express.static("./methods-public"))

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    console.log(method, url)
    next()
}

app.use(logger)

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/api/v1/people", peopleRouter);

//app.get('/api/v1/people', (req, res) => {
//    res.json(people)
//})

//app.post('/api/v1/people', (req, res) => {
//    const { name } = req.body
//    if(name) {
//        people.push({ id: people.length + 1, name: name });
//        res.status(201).json({ success: true, name: name });
//    } else {
//        res.status(400).json({ success: false, message: "Please provide a name" })
//    }
//})

app.all('*', (req, res) => {
    res.status(404).send('404 - Not Found');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
