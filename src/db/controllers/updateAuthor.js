const Book = require('../models/bookModel');

const updateAuthor = async (req, res) => {
    try {
        const { bookId, newAuthor } = req.body;

        const updatedBook = await Book.update(
            { author: newAuthor }, 
            { where: { bookId } }  
        );

        if (updatedBook[0] === 0) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json({ message: "Author updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error updating author" });
    }
};

module.exports = updateAuthor;
