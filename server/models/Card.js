const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
​
const cardSchema = new Schema(
    {
        uid: {
            type: Number,
            required: true,
            unique: true
        },
        pair_id: {
            type: Number,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: true,
            trim: true
        },
        stat: {
            type: String,
            
        }
    },
    // add virtuals
    {
        toJSON: {
            virtuals: true
        }
    }
);
​
​
const Cards = model("Card", cardSchema);
module.exports = Card;