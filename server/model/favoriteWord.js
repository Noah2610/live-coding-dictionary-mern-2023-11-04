import mongoose from "mongoose";

const favoriteWordSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
    },
});

export const FavoriteWord = mongoose.model("Favorite", favoriteWordSchema);
