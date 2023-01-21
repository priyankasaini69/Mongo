const express = require('express');
const router = express.Router();
const {
    getAllBooks,
    // getBookByName,
    getAllBookByName,
    addBook,
    updateBook,
    deleteAllBook,
    deleteBook
} = require('../controllers/books.js');

router.get('/', getAllBooks);
// router.get('/:name', getBookByName);
router.get('/:name', getAllBookByName);
router.post('/', addBook);
router.put('/:name', updateBook);
router.delete('/:name', deleteAllBook);
router.delete('/:name', deleteBook);



module.exports = router;