const Book = require('../models/bookModel');

const bookDetails = async (req, res) => {
    try {
        const { bookId } = req.params;

        const book = await Book.findOne({
            where: { bookId }
        });

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json(book);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving book details" });
    }
};

module.exports = bookDetails;
