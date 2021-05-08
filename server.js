const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req,res)=> {
    res.status(200).send('WE ARE WORKING FROM HOME!')
})

app.listen(PORT, console.log(`Server is starting at port ${PORT}`));