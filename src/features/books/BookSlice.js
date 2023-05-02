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
  },
});

export const { showBooks, addBook } = bookSlice.actions;
export default bookSlice.reducer;
