import { createSlice } from "@reduxjs/toolkit";
const initialBooks = {
  books: [
    { id: 1, title: "Love Bangladesh", author: "Usuf" },
    { id: 2, title: "Hate India", author: "shm" },
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

    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
