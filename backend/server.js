const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const ContactRouter = require('./routes/contact')

mongoose.connect('mongodb://mongo:27017/contactdb')
.then((result) => {
    console.log('Connected to Database Successfully!!');
})
.catch((err) => {
    console.log(err);
});

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = 4000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.use('/api/contact', ContactRouter)