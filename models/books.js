const mongoose = require('mongoose');


const bookSchema = mongoose.Schema({
    name: String,
    author: String
});

const Book = mongoose.model('Books', bookSchema);
const book1 = new Book({ name: 'mango', author: 'yellow' });
// book1.save();
module.exports = Book;
