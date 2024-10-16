const Book = require("./bookModel");

const deleteAllBooks = async (req, res) => {
    try {
        const result = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
        });

        res
          .status(201)
          .json({ message: `${result.title} has been created`, result: result});
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
 deleteAllBooks: deleteAllBooks,
};