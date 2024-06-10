"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const books_1 = require("../data/books");
exports.resolvers = {
    Query: {
        books: () => books_1.booksData,
    },
};
