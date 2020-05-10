const express = require('express');
const cors = require('cors');
const randomWords = require('random-words');
const app = express();
app.use(cors());
const port = 3001;

function generateProducts(productsCount) {
    const products = []
    for(let i=0; i<productsCount; i++) {
        const names = randomWords(2) 
        products.push({
            brand_name: names[0],
            name: names[1],
            gtin14: i,
            size: i + 10
        })
    }
    return products;
}
app.get('/api/products/:count', (req, res) => res.send(generateProducts(req.params.count)))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))