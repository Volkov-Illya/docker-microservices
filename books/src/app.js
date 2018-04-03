const express = require("express");
const Book = require("./models/books_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({
        msg: "books"
    });
});

app.get("/api/v1/books", async (req, res) => {

    let userId = req.query.userId;

    const books = await Book.find({
        userId: userId
    });
    res.json(books);
});

app.post("/api/v1/books", async (req, res) => {

    const book = new Book({
        name: req.body.name,
        userId: req.body.userId
    });

    const savedBook = await book.save();
    res.json(savedBook);
});

module.exports = app;