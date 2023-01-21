const Book = require('../models/books.js');


const getAllBooks = async (req, res) => {
    const books = await Book.find({});
    res.json(books);
};

// const getBookByName = async (req, res) => {
//     const book = await Book.findOne({name: req.params.name});
//     res.json(book);
// };
const getAllBookByName = async (req, res) => {
    const book = await Book.find({name: req.params.name});
    res.json(book);
};
const addBook = async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.json(book);
};
const updateBook = async (req, res) => {
    const book = await Book.findOneAndUpdate({name: req.params.name}, req.body, {new: true});
    res.json(book);
};
const deleteAllBook = async (req, res) => {
    await Book.deleteMany({name: req.params.name});
    res.send('deleted');
}
const deleteBook = async (req, res) => {
    await Book.findOneAndDelete({name: req.params.name});
    res.send('deleted');
};




module.exports = {
    getAllBooks,
    // getBookByName,
    getAllBookByName,
    addBook,
    updateBook,
    deleteAllBook,
    deleteBook
};


