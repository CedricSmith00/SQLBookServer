require("dotenv").config();
const Book = require("./db/models/bookModel");
const bookRouter = require("./db/routes/bookRoutes")
const express = require("express");
const app = express();
require("./db/connection");

function syncTables(){
    Book.sync({
         alter:true
    })
}

app.use(express.json());
app.use(bookRouter);


app.get("/health", (req, res) => {
    res.status(200).send("API is healthy")
});

syncTables();
app.listen(5001, () => {console.log("Server is listening on port 5001")})