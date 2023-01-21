const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bookRouter = require('./routes/books.js');

app.use(express.json());
app.use('/books',bookRouter);

mongoose.connect("mongodb://127.0.0.1:27017/book", { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log('connected'));

app.listen(3000, () => {
    console.log(`server conected`);
})
