const Book = require("../models/bookModel");

const addBook = async (req, res) => {
    try {
       const result =  await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
        })
        console.log(result);
        res.status(201).json({ message: `${req.body.title} has been created`, result: result});
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
};

module.exports = addBook;