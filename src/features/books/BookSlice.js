import { createSlice } from "@reduxjs/toolkit";
const { v4: uuidv4 } = require("uuid");

const initialBooks = {
  books: [
    { id: uuidv4(), title: "Love Bangladesh", author: "Usuf" },
    { id: uuidv4(), title: "Hate India", author: "shm" },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,

    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isbookExist = state.books.filter((book) => book.id === id);
      if (isbookExist) {
        isbookExist[0].title = title;
        isbookExist[0].author = author;
      }
    },

    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
