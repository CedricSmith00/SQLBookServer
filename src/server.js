require("dotenv").config();
const bookRouter = require("./db/routes/bookRoutes")
const express = require("express");
const app = express();
require("./db/connection");

app.use(express.json());
app.use(bookRouter);


app.get("/health", (req, res) => {
    res.status(200).send("API is healthy")
});

app.listen(5001, () => {console.log("Server is listening on port 5001")})