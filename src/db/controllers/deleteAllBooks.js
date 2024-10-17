const Book = require('../models/bookModel');

const deleteAllBooks = async (req, res) => {
    try {
        const deletedBooks = await Book.destroy({
            where: {},
            truncate: true
        });

        if (!deletedBooks) {
            return res.status(404).json({ message: "No books found to delete" });
        }

        res.json({ message: "All books deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting all books" });
    }
};

module.exports = deleteAllBooks 

