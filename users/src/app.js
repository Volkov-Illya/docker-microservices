const express = require("express");
const User = require("./models/users_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({
        msg: "users"
    });
});

app.get("/api/v1/users", async (req, res) => {

    const users = await User.find({});
    res.json(users);
});

app.post("/api/v1/users", async (req, res) => {

    const user = new User({
        name: req.body.name
    });
    const savedUser = await user.save();
    res.json(savedUser);
});

module.exports = app;