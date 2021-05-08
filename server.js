const express = require('express');
const mongoose = require('mongoose')
let count = 0; //just for my own sanity (not need it)
require('dotenv').config() 

const app = express();
const PORT = process.env.PORT || 8000;

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true // to avoid annoying pop ups asking for upgrade
}, (err) => {
    if (err) throw err
    console.log('MongoDB connection is established')
    count++; //(not need it)
})

app.get('/', (req,res)=> {
    res.status(200).send('WE ARE WORKING FROM HOME!')
})

app.listen(PORT, console.log(`Server is starting at port ${PORT}`));