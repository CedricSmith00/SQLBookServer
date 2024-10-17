const Book = require('../models/bookModel');

const updateGenre = async (req, res) => {
    try {
        const { bookId, newGenre } = req.body;

        const updatedBook = await Book.update(
            { genre: newGenre },
            { where: { bookId } }
        );

        if (updatedBook[0] === 0) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json({ message: "Genre updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error updating Genre" });
    }
};

module.exports = updateGenre
