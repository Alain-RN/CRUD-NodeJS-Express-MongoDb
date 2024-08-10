const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route.js')
// const Product = require("./models/product.model.js")
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//router routes
app.use("/api/products", productRoute)


app.get('/', (req, res) => {
    res.send('Hello from Node API Server')
})

mongoose.connect("mongodb://localhost:27017/Node_API")
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(3000, () => {
            console.log("server running on port 3000")
        })
    })
    .catch(() => {
        console.log('Connection failed')
    })
