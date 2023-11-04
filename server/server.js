import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const PORT = 8090;
const MONGO_CONNECTION = process.env.MONGO_CONNECTION;

if (!MONGO_CONNECTION) {
    throw "Expected MONGO_CONNECTION environment variable to exist";
}

mongoose.connect(MONGO_CONNECTION);

const server = express();

server.get("/", (req, res) => {
    const url = req.url;
    console.log(url);
    res.send("Hi!");
});

server.listen(PORT, () => {
    console.log(`Server running on\n  http://localhost:${PORT}`);
});
