const express = require('express')
const mongoose = require('mongoose');
const app = express()



// setTimeout(

//     ,
//      3000
// )
app.get('/', (req, res) => {
    res.send('Hello from Node API Server uptaded')
})

mongoose.connect("mongodb+srv://alainnoelisoa:4heuGkW3tAEun9fp@cluster0.ucbcegt.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log('Connected to MongoDB')
    app.listen(3000,()=>{
        console.log("server running on port 3000")
    })
})
.catch(()=>{
    console.log('Connection failed')
})
