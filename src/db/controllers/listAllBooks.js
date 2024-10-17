const Book = require('../models/bookModel');

const listAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll(); 
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: "Error fetching books" });
    }
};


module.exports = listAllBooks 
