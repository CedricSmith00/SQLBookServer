const Router = require("express");
const bookRouter = Router();

const { addBook } = require("./controllers");

bookRouter.post("/addbook", addBook);

module.exports =bookRouter;

// import a function to add a book = addBook.js
// import a function to list all books = listAllBooks.js
// import a function to update the author name on a specific book = updateAuthor.js
// import a function to update the genre of a book = updateGenre.js
// import a function to delete a book = deleteBook.js
// import a function to list the details of an individual book = bookDetails.js
// import a function to delete all books = deleteAllBooks.js