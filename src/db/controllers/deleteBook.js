const Book = require('../models/bookModel');

const deleteBook = async (req, res) => {
    try {
        const { bookId } = req.body;

        const deletedBook = await Book.destroy({
            where: { bookId }
        });

        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting book" });
    }
};

module.exports = deleteBook 
