const { Router } = require("express");
const bookRouter = Router();

const addBook = require("../controllers/addBook");
const listAllBooks = require("../controllers/listAllBooks");
const updateAuthor = require("../controllers/updateAuthor");
const updateGenre = require("../controllers/updateGenre");
const deleteBook = require("../controllers/deleteBook");
const bookDetails = require("../controllers/bookDetails");
const deleteAllBooks = require("../controllers/deleteAllBooks");

bookRouter.post("/addbook", addBook); 
bookRouter.get("/listAllBooks", listAllBooks); 
bookRouter.put("/updateAuthor", updateAuthor); 
bookRouter.put("/updateGenre", updateGenre); 
bookRouter.delete("/deleteBook", deleteBook); 
bookRouter.get("/bookDetails", bookDetails); 
bookRouter.delete("/deleteAllBooks", deleteAllBooks); 

module.exports = bookRouter;