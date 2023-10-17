const express = require('express')
const { products } = require("./data");

const app = express();

const port = 3000;

app.use(express.static("./public"))

app.get('/api/v1/test', (req, res) => {
    res.json({ message: 'It worked!' })
})

app.get('/api/v1/products', (req, res) => {
    res.json(products)
})

app.get('/api/v1/products/:productID', (req, res) => {
    const id = parseInt(req.params.productID)
    const findId = products.find((item) => item.id === id)
    if (!findId) {
        res.status(404).send('Product not found')
    } else {
        res.json(findId)
    }
})

app.get('/api/v1/query', (req, res) => {
    const search = req.query.search
    const cost = req.query.cost
    const filteredProducts = products.filter((items) => items.search === search && items.cost === limit)
    res.json(filteredProducts)
})

app.all('*', (req, res) => {
    res.status(404).send('404 - Not Found');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
