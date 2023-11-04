import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

import { FavoriteWord } from "./model/favoriteWord.js";

const PORT = 8090;
const MONGO_CONNECTION = process.env.MONGO_CONNECTION;

if (!MONGO_CONNECTION) {
    throw "Expected MONGO_CONNECTION environment variable to exist";
}

mongoose.connect(MONGO_CONNECTION);

const server = express();

server.use(express.json());

// Alternative to using `cors` library,
// configure headers yourself using an Express middleware:
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");

    if (req.method === "OPTIONS") {
        res.send("ok");
    } else {
        next();
    }
});

server.get("/", (req, res) => {
    res.send("Hi!");
});

server.post("/favorites", async (req, res) => {
    const word = req.body.word;

    await FavoriteWord.create({
        word,
    });

    res.send("ok");
});

server.listen(PORT, () => {
    console.log(`Server running on\n  http://localhost:${PORT}`);
});
